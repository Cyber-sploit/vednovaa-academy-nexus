
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Enrollment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    year: "",
    course: "",
    batchMonth: "",
    slot: "Evening",
    timing: ""
  });

  const courses = [
    "AI/ML with Python",
    "Python Programming",
    "Data Analysis",
    "Cyber Security",
    "Business Analysis",
    "Build360",
    "Finance",
    "Bioinformatics"
  ];

  // Updated months array with disabled months removed
  const months = [
    "July", "August", "September", "October", "November", "December"
  ];

  const timings = [
    "5:00 PM – 6:15 PM",
    "6:30 PM – 7:45 PM"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('enrollment_submissions')
        .insert([{
          name: formData.name,
          gender: formData.gender,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          degree: formData.degree,
          year: formData.year,
          course: formData.course,
          batch_month: formData.batchMonth,
          slot: formData.slot,
          timing: formData.timing
        }]);

      if (error) throw error;

      toast({
        title: "Enrollment Submitted!",
        description: "We'll contact you within 24 hours to confirm your enrollment.",
      });

      // Reset form
      setFormData({
        name: "",
        gender: "",
        email: "",
        phone: "",
        college: "",
        degree: "",
        year: "",
        course: "",
        batchMonth: "",
        slot: "Evening",
        timing: ""
      });
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your enrollment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Course Enrollment</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Start your journey with us by filling out the enrollment form below
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">Enrollment Form</CardTitle>
              <CardDescription>
                Please fill out all required fields to complete your course enrollment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (WhatsApp) *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your WhatsApp number" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Academic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="college">College/University *</Label>
                      <Input 
                        id="college" 
                        value={formData.college}
                        onChange={(e) => handleInputChange('college', e.target.value)}
                        placeholder="Enter your college/university name" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree *</Label>
                      <Input 
                        id="degree" 
                        value={formData.degree}
                        onChange={(e) => handleInputChange('degree', e.target.value)}
                        placeholder="Enter your degree (e.g., B.Tech, BCA, etc.)" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study *</Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                      <SelectTrigger className="md:w-1/2">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((year) => (
                          <SelectItem key={year} value={year.toString()}>{year}{year === 1 ? 'st' : year === 2 ? 'nd' : year === 3 ? 'rd' : 'th'} Year</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Enrollment Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Enrollment Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="course">Course *</Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course} value={course}>{course}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="batchMonth">Batch Month *</Label>
                      <Select value={formData.batchMonth} onValueChange={(value) => handleInputChange('batchMonth', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select batch month" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>{month}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="slot">Slot</Label>
                      <Input 
                        id="slot" 
                        value={formData.slot}
                        readOnly
                        className="bg-gray-100"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timing">Timing *</Label>
                      <Select value={formData.timing} onValueChange={(value) => handleInputChange('timing', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timing" />
                        </SelectTrigger>
                        <SelectContent>
                          {timings.map((timing) => (
                            <SelectItem key={timing} value={timing}>{timing}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-lg py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
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

export default Enrollment;
