import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const EBookVerify = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError("Invalid verification link");
      setVerifying(false);
      return;
    }

    verifyPayment();
  }, [token]);

  const verifyPayment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('verify-payment', {
        body: { token }
      });

      if (error) throw error;

      if (data.success) {
        setVerified(true);
        toast({
          title: "Payment Verified!",
          description: "Your payment has been confirmed. Redirecting to download...",
        });
        
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          navigate(`/ebook/${slug}/thank-you`);
        }, 2000);
      } else {
        throw new Error(data.error || "Verification failed");
      }
    } catch (error: any) {
      console.error('Verification error:', error);
      setError(error.message || "Failed to verify payment");
      toast({
        title: "Verification Failed",
        description: error.message || "Failed to verify payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Payment Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {verifying && (
                <div className="flex flex-col items-center space-y-4">
                  <Loader2 className="h-12 w-12 text-primary animate-spin" />
                  <p className="text-lg text-gray-600">Verifying your payment...</p>
                </div>
              )}

              {verified && (
                <div className="flex flex-col items-center space-y-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Payment Verified Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Redirecting you to download your e-book...
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex flex-col items-center space-y-4">
                  <XCircle className="h-12 w-12 text-red-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">
                      Verification Failed
                    </h3>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <Button 
                      onClick={() => navigate(`/ebook/${slug}`)}
                      variant="outline"
                    >
                      Back to E-Book Page
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EBookVerify;