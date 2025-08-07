import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Target, Award, ArrowRight, CheckCircle } from "lucide-react";

const B2BCollaboration = () => {
  const features = [
    {
      title: "Industry-Aligned Curriculum",
      description: "Courses in AI/ML, Cyber Security, Finance, Data Analytics, etc.",
      icon: Target,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Hands-On Labs & Projects",
      description: "Real-world training and practical experience.",
      icon: GraduationCap,
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Mentorship & Placement Support",
      description: "Resume building, mock interviews, and career guidance.",
      icon: Users,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Certification & LOR",
      description: "Recognized certificates and Letters of Recommendation for students.",
      icon: Award,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100"
    },
  ];

  const steps = [
    { step: "Step 1", title: "Initial Discussion", description: "Understanding your college requirements and student goals" },
    { step: "Step 2", title: "Program Selection", description: "Choose from our industry-proven courses and training modules" },
    { step: "Step 3", title: "Integration & Setup", description: "Seamless onboarding with minimal disruption to existing curriculum" },
    { step: "Step 4", title: "Ongoing Support", description: "Continuous mentorship, progress tracking, and placement assistance" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner with Vednovaa Academy to Empower Your Students
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto mb-8">
              Join hands with us to provide cutting-edge courses, hands-on labs, and career-oriented programs to your students.
            </p>
            <div className="flex justify-center">
              <Users className="h-20 w-20 text-primary-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`aspect-video ${feature.bgColor} flex items-center justify-center rounded-t-lg overflow-hidden`}>
                  <feature.icon className={`h-12 w-12 ${feature.iconColor}`} />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Collaborate */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Collaborate
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We partner with colleges to seamlessly integrate our proven industry courses into your academic ecosystem. 
              Our comprehensive programs in AI/ML, Cybersecurity, Data Analysis, and Programming are designed to bridge 
              the gap between classroom learning and industry requirements, ensuring your students graduate job-ready.
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((item, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-lg font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 transform translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to create opportunities for your students?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's start the conversation.
          </p>
          <Link to="/contact">
            <Button className="bg-primary-600 hover:bg-primary-700 text-lg px-8 py-3">
              Collaborate with Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B2BCollaboration;