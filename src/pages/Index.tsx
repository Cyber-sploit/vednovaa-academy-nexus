
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock } from "lucide-react";

const Index = () => {
  const colleges = [
    "Dr. MGR University",
    "LPU Punjab",
    "Sharda University",
    "SRM Modinagar",
    "Galgotias University",
    "KIIT University",
    "Amity University",
    "Chandigarh University",
  ];

  const popularCourses = [
    {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning",
      enrollments: "1,200+ Enrolled",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
    },
    {
      title: "Data Analysis",
      description: "Transform data into actionable insights",
      enrollments: "800+ Enrolled",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    },
    {
      title: "Cyber Security",
      description: "Protect digital assets and networks",
      enrollments: "650+ Enrolled",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    },
  ];

  const timelineSteps = [
    {
      title: "All-in-one Learning",
      description: "Live + Recorded Sessions",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Hands-on Experience",
      description: "Lab Access & Practice",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Project-Based Learning",
      description: "Real-world Applications",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Mentorship & Consulting",
      description: "Resume + Mock Interviews",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Personality Development",
      description: "Crash Course Program",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 right-40 w-16 h-16 bg-white opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shape Your Future with
              <span className="block text-primary-200">Next-Gen Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Join thousands of students mastering cutting-edge skills in AI, Data Science, 
              Cybersecurity, and more at India's premier educational academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3">
                Enquire Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-3">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnered Colleges Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Institutions</h2>
            <p className="text-lg text-gray-600">Partnered with top-tier colleges across India</p>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-slide-in space-x-8">
              {colleges.map((college, index) => (
                <div key={index} className="flex-shrink-0">
                  <Badge variant="outline" className="text-lg py-2 px-6 bg-white border-primary-200 text-primary-700">
                    {college}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <p className="text-lg text-gray-600">Industry-leading programs designed for success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Timeline */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">A comprehensive learning journey designed for your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {timelineSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <Award className="h-16 w-16 mx-auto mb-6 text-primary-200" />
              <h2 className="text-3xl font-bold mb-6">Get Certified & Recognized</h2>
              <p className="text-xl text-primary-100 mb-8">
                Upon successful course completion, students receive a <strong>Certificate of Completion</strong> and 
                a <strong>Letter of Recommendation (LOR)</strong> to boost their career prospects.
              </p>
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                View Sample Certificate
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
