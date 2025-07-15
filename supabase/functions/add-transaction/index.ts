
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { transactionId, ebookSlug, amount, customerEmail, customerPhone, paymentMethod } = await req.json();

    if (!transactionId || !ebookSlug || !amount) {
      return new Response(
        JSON.stringify({ error: "Transaction ID, eBook slug, and amount are required" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400 
        }
      );
    }

    // Create Supabase client with service role
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Add the transaction record
    const { data, error } = await supabase
      .from("ebook_transactions")
      .insert({
        transaction_id: transactionId,
        ebook_slug: ebookSlug,
        amount: amount,
        currency: "INR",
        payment_method: paymentMethod || "UPI",
        customer_email: customerEmail,
        customer_phone: customerPhone,
        status: "verified",
        verified_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error("Failed to add transaction:", error);
      return new Response(
        JSON.stringify({ error: "Failed to add transaction record" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500 
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, transaction: data }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );

  } catch (error) {
    console.error("Add transaction error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});
