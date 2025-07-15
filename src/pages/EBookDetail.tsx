
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ShoppingCart, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EBookDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'scan' | 'verify' | 'complete'>('scan');
  const [transactionId, setTransactionId] = useState('');

  const ebookData = {
    "cybersecurity-beginners-guide": {
      title: "Break Into Cybersecurity: A Beginner's Guide to Career Roadmaps & Skill Paths",
      price: "₹99",
      coverImage: "/lovable-uploads/4cc44e3c-0bb3-4357-bbcb-b0dd68dba890.png",
      qrCode: "/lovable-uploads/01522c8c-2f13-44d2-a9ec-fe38adf5a8d0.png",
      description: `Are you struggling to start your cybersecurity career? Feeling lost between random YouTube videos and scattered blogs?

This ₹99 eBook is your shortcut to clarity.

Whether you dream of becoming a SOC Analyst, Pentester, or a Bug Bounty Hunter, this guide gives you:

✅ Clear career paths (with tools, skills & certifications)
✅ 30-day beginner action plan (for daily progress)  
✅ Free learning resources & platforms
✅ Toolkits based on your role
✅ Bonus: Vednovaa's expert recommendations

Designed for students, freshers, and career switchers, this is not just a PDF — it's your first step toward a high-paying cybersecurity job.`,
      downloadLink: "https://drive.google.com/file/d/1LroZW88o9HkAOe86b7AUKu5ke26510hJ/view?usp=sharing"
    }
  };

  const ebook = ebookData[slug as keyof typeof ebookData];

  const handlePaymentMade = () => {
    if (paymentStep === 'scan') {
      setPaymentStep('verify');
      toast({
        title: "Payment Initiated",
        description: "Please enter your transaction ID to verify payment.",
      });
    }
  };

  const handlePaymentVerification = () => {
    if (!transactionId.trim()) {
      toast({
        title: "Transaction ID Required",
        description: "Please enter your transaction ID to verify payment.",
        variant: "destructive",
      });
      return;
    }

    if (transactionId.length < 6) {
      toast({
        title: "Invalid Transaction ID",
        description: "Please enter a valid transaction ID (minimum 6 characters).",
        variant: "destructive",
      });
      return;
    }

    setPaymentProcessing(true);
    // Simulate payment verification process
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentStep('complete');
      toast({
        title: "Payment Verified!",
        description: "Your payment has been confirmed. Redirecting to download...",
      });
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        navigate(`/ebook-thankyou/${slug}?verified=true&txn=${transactionId}`);
      }, 2000);
    }, 3000);
  };

  if (!ebook) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">E-Book Not Found</h1>
            <p className="text-xl text-gray-600">The requested e-book could not be found.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Purchase E-Book</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Complete your payment verification to download this comprehensive guide
            </p>
          </div>
        </div>
      </section>

      {/* E-book Detail Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book Cover and Info */}
            <div className="space-y-6">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <img 
                  src={ebook.coverImage} 
                  alt={ebook.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{ebook.title}</h2>
                <div className="text-4xl font-bold text-primary-600 mb-6">{ebook.price}</div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About This E-Book</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {ebook.description}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {paymentStep === 'scan' && "Complete Your Purchase"}
                    {paymentStep === 'verify' && "Verify Your Payment"}
                    {paymentStep === 'complete' && "Payment Confirmed"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {paymentStep === 'scan' && (
                    <>
                      <div className="text-center">
                        <p className="text-gray-600 mb-4">Scan the QR code below to pay {ebook.price}</p>
                        <div className="inline-block bg-white p-4 rounded-lg shadow-md">
                          <img 
                            src={ebook.qrCode} 
                            alt="Payment QR Code"
                            className="w-64 h-64 mx-auto"
                          />
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t">
                        <p className="text-sm text-gray-600 mb-4 text-center">
                          After completing the payment via QR code, click the button below to proceed.
                        </p>
                        <Button 
                          onClick={handlePaymentMade}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          I have made the payment
                        </Button>
                      </div>
                    </>
                  )}

                  {paymentStep === 'verify' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <AlertCircle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                        <p className="text-gray-700 mb-4">
                          Please enter your transaction ID to verify your payment of {ebook.price}
                        </p>
                      </div>
                      
                      <div>
                        <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-2">
                          Transaction ID *
                        </label>
                        <input
                          type="text"
                          id="transactionId"
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          placeholder="Enter your transaction ID"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          You can find this in your payment app or SMS confirmation
                        </p>
                      </div>

                      <Button 
                        onClick={handlePaymentVerification}
                        disabled={paymentProcessing || !transactionId.trim()}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                      >
                        {paymentProcessing ? (
                          <>Verifying Payment...</>
                        ) : (
                          <>
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Verify Payment
                          </>
                        )}
                      </Button>
                    </div>
                  )}

                  {paymentStep === 'complete' && (
                    <div className="text-center space-y-4">
                      <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
                      <div>
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Payment Verified!</h3>
                        <p className="text-gray-600">
                          Your payment has been confirmed. You will be redirected to download your e-book shortly.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EBookDetail;
