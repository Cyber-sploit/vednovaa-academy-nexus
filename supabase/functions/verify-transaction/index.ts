
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
    const { transactionId, ebookSlug } = await req.json();

    if (!transactionId || !ebookSlug) {
      return new Response(
        JSON.stringify({ error: "Transaction ID and eBook slug are required" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400 
        }
      );
    }

    // Create Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Check if transaction exists and is valid
    const { data: transaction, error } = await supabase
      .from("ebook_transactions")
      .select("*")
      .eq("transaction_id", transactionId)
      .eq("ebook_slug", ebookSlug)
      .eq("status", "verified")
      .single();

    if (error || !transaction) {
      console.log("Transaction verification failed:", error);
      return new Response(
        JSON.stringify({ 
          error: "Invalid transaction ID or payment not verified",
          valid: false 
        }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400 
        }
      );
    }

    // Update download count
    const { error: updateError } = await supabase
      .from("ebook_transactions")
      .update({ 
        download_count: transaction.download_count + 1,
        updated_at: new Date().toISOString()
      })
      .eq("id", transaction.id);

    if (updateError) {
      console.log("Failed to update download count:", updateError);
    }

    return new Response(
      JSON.stringify({ 
        valid: true,
        transaction: {
          id: transaction.id,
          transaction_id: transaction.transaction_id,
          amount: transaction.amount,
          currency: transaction.currency,
          download_count: transaction.download_count + 1
        }
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );

  } catch (error) {
    console.error("Transaction verification error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", valid: false }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});
