
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Mail, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const EBookDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendPaymentLink = async () => {
    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setEmailSending(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-payment-email', {
        body: {
          email,
          ebookSlug: slug,
          ebookTitle: ebook.title,
          ebookPrice: ebook.price,
          qrCodeUrl: `${window.location.origin}${ebook.qrCode}`
        }
      });

      if (error) throw error;

      setEmailSent(true);
      toast({
        title: "Payment Link Sent!",
        description: "Check your email for the payment QR code and instructions.",
      });
    } catch (error) {
      console.error('Error sending payment email:', error);
      toast({
        title: "Error",
        description: "Failed to send payment link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setEmailSending(false);
    }
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
              Complete your purchase to download this comprehensive guide
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
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Get Payment Link
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!emailSent ? (
                    <>
                      <div className="text-center mb-6">
                        <p className="text-gray-600">
                          Enter your email address to receive the payment QR code and instructions.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        
                        <Button 
                          onClick={handleSendPaymentLink}
                          disabled={emailSending || !email}
                          className="w-full"
                        >
                          {emailSending ? (
                            <>Sending...</>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send me Payment Link
                            </>
                          )}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-center mb-2">
                          <Mail className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          Payment Link Sent!
                        </h3>
                        <p className="text-green-700">
                          We've sent the payment QR code and instructions to <strong>{email}</strong>
                        </p>
                      </div>
                      
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• Check your email for the payment QR code</p>
                        <p>• Complete the payment using the provided instructions</p>
                        <p>• You'll receive the download link after payment confirmation</p>
                      </div>
                      
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setEmailSent(false);
                          setEmail("");
                        }}
                        className="w-full"
                      >
                        Send to Different Email
                      </Button>
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
