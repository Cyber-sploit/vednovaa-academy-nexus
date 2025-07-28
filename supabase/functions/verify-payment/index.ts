import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerifyPaymentRequest {
  token: string;
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

    const { token }: VerifyPaymentRequest = await req.json();

    console.log("Verifying payment for token:", token);

    // Find the email request by token and check if it's not expired
    const { data: emailRequest, error: fetchError } = await supabaseClient
      .from("ebook_email_requests")
      .select("*")
      .eq("verification_token", token)
      .gt("token_expires_at", new Date().toISOString())
      .single();

    if (fetchError || !emailRequest) {
      console.error("Token not found or expired:", fetchError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid or expired token" 
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Update payment status to completed
    const { error: updateError } = await supabaseClient
      .from("ebook_email_requests")
      .update({ 
        payment_status: "completed",
        updated_at: new Date().toISOString()
      })
      .eq("verification_token", token);

    if (updateError) {
      console.error("Failed to update payment status:", updateError);
      throw new Error("Failed to confirm payment");
    }

    console.log("Payment confirmed for:", emailRequest.email);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Payment confirmed successfully",
        ebook_slug: emailRequest.ebook_slug 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in verify-payment function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to verify payment" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);