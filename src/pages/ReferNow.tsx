
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Users, Gift } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ReferNow = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourContact: "",
    referType: "",
    referName: "",
    referEmail: "",
    referContact: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await (supabase as any)
        .from('referral_submissions')
        .insert([{
          your_name: formData.yourName,
          your_email: formData.yourEmail,
          your_contact: formData.yourContact,
          refer_type: formData.referType,
          refer_name: formData.referName,
          refer_email: formData.referEmail,
          refer_contact: formData.referContact,
          message: formData.message
        }]);

      if (error) throw error;

      toast({
        title: "Referral Submitted!",
        description: "Thank you for your referral! We'll get in touch with both you and your referral soon.",
      });

      // Reset form
      setFormData({
        yourName: "",
        yourEmail: "",
        yourContact: "",
        referType: "",
        referName: "",
        referEmail: "",
        referContact: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting referral:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your referral. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <Users className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Refer & Earn</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Help others discover quality education and earn rewards for successful referrals
            </p>
          </div>
        </div>
      </section>

      {/* Referral Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Refer to Vednovaa Academy?</h2>
            <p className="text-lg text-gray-600">Share the gift of education and get rewarded</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <Gift className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Rewards</h3>
                <p className="text-gray-600">Get attractive rewards for every successful referral who enrolls in our courses</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Help Others</h3>
                <p className="text-gray-600">Share quality education opportunities with your network and help them advance their careers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">∞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Limits</h3>
                <p className="text-gray-600">Refer as many people as you want - there's no limit to the rewards you can earn</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">Submit Your Referral</CardTitle>
              <CardDescription className="text-lg">
                Fill out the form below to refer someone to Vednovaa Academy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Your Information Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Your Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="yourName">Your Name *</Label>
                      <Input 
                        id="yourName" 
                        placeholder="Enter your full name"
                        value={formData.yourName}
                        onChange={(e) => handleInputChange('yourName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yourEmail">Your Email *</Label>
                      <Input 
                        id="yourEmail" 
                        type="email" 
                        placeholder="Enter your email address"
                        value={formData.yourEmail}
                        onChange={(e) => handleInputChange('yourEmail', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="yourContact">Your Contact Number *</Label>
                    <Input 
                      id="yourContact" 
                      type="tel" 
                      placeholder="Enter your phone number"
                      value={formData.yourContact}
                      onChange={(e) => handleInputChange('yourContact', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Referral Information Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Referral Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="referType">Whom You're Referring *</Label>
                    <Select onValueChange={(value) => handleInputChange('referType', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select referral type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="school">School</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="referName">Referral Name *</Label>
                      <Input 
                        id="referName" 
                        placeholder="Enter referral's name"
                        value={formData.referName}
                        onChange={(e) => handleInputChange('referName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="referEmail">Referral Email *</Label>
                      <Input 
                        id="referEmail" 
                        type="email" 
                        placeholder="Enter referral's email"
                        value={formData.referEmail}
                        onChange={(e) => handleInputChange('referEmail', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="referContact">Referral Contact Number *</Label>
                    <Input 
                      id="referContact" 
                      type="tel" 
                      placeholder="Enter referral's phone number"
                      value={formData.referContact}
                      onChange={(e) => handleInputChange('referContact', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Additional Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Any additional information about your referral or specific courses they might be interested in..."
                      className="min-h-[100px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> By submitting this form, you confirm that you have permission to share the referral's contact information and that they are aware of this referral. We will contact both you and your referral within 24-48 hours.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-lg py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Referral"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferNow;
