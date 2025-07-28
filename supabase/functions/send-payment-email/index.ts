import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.8";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PaymentEmailRequest {
  email: string;
  ebookSlug: string;
  ebookTitle: string;
  ebookPrice: string;
  qrCodeUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const { email, ebookSlug, ebookTitle, ebookPrice, qrCodeUrl }: PaymentEmailRequest = await req.json();

    console.log("Received payment email request:", { email, ebookSlug, ebookTitle });

    // Store email request in database
    const { data: emailRequest, error: dbError } = await supabaseClient
      .from("ebook_email_requests")
      .insert({
        email,
        ebook_slug: ebookSlug,
        payment_status: "pending"
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store email request");
    }

    console.log("Stored email request:", emailRequest);

    // Send payment email with QR code
    const emailResponse = await resend.emails.send({
      from: "Vednovaa <onboarding@resend.dev>",
      to: [email],
      subject: `Payment Link for ${ebookTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin-bottom: 10px;">Complete Your E-Book Purchase</h1>
            <p style="color: #666; font-size: 16px;">Thank you for your interest in our e-book!</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #333; margin-bottom: 15px;">${ebookTitle}</h2>
            <p style="color: #666; margin-bottom: 10px;"><strong>Price:</strong> ${ebookPrice}</p>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <h3 style="color: #333; margin-bottom: 15px;">Scan QR Code to Pay</h3>
            <div style="display: inline-block; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <img src="${qrCodeUrl}" alt="Payment QR Code" style="width: 200px; height: 200px; display: block;" />
            </div>
          </div>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h4 style="color: #1976d2; margin-bottom: 10px;">After Payment:</h4>
            <p style="color: #333; margin-bottom: 0;">Once you complete the payment, you'll receive another email with the download link for your e-book.</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 14px;">
              Best regards,<br>
              The Vednovaa Team
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Payment link sent to your email",
        requestId: emailRequest.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-payment-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send payment email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);