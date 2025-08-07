import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock, GraduationCap, Target, Lightbulb, Brain, Code, Shield, BarChart3, TrendingUp, Star, Database, FlaskConical, DollarSign, Dna } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const colleges = [
    "Government Engineering College",
    "State University of Technology", 
    "Regional Institute of Management",
    "National College of Engineering",
    "Central Technical University",
    "Institute of Applied Sciences",
    "Metropolitan College of Arts",
    "Provincial University",
  ];

  const popularCourses = [
    {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning",
      enrollments: "0 Enrolled",
      icon: Brain,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      slug: "ai-ml-python"
    },
    {
      title: "Data Analysis", 
      description: "Transform data into actionable insights",
      enrollments: "0 Enrolled",
      icon: BarChart3,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      slug: "data-analysis"
    },
    {
      title: "Cyber Security",
      description: "Protect digital assets and networks", 
      enrollments: "0 Enrolled",
      icon: Shield,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      slug: "cyber-security"
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

  const handleEnquireNow = () => {
    navigate('/contact');
  };

  const handleExploreCourses = () => {
    navigate('/courses');
  };

  const handleViewCertificate = () => {
    navigate('/sample-certificate');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float-delayed"></div>
          <div className="absolute top-40 right-40 w-16 h-16 bg-white opacity-10 rounded-full animate-float-slow"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-down">
                Shape Your Future with
                <span className="block text-primary-200 animate-glow">Next-Gen Education</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl animate-fade-in-up animation-delay-300">
                Join thousands of students mastering cutting-edge skills in AI, Data Science, 
                Cybersecurity, and more at India's premier educational academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleEnquireNow}
                >
                  Enquire Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 bg-transparent text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleExploreCourses}
                >
                  Explore Courses
                </Button>
              </div>
            </div>
            
            {/* Educational Dashboard Visualization */}
            <div className="animate-fade-in-scale relative" style={{ animationDelay: '0.3s' }}>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Course Categories Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/20 rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300">
                    <Brain className="h-12 w-12 mx-auto mb-3 text-purple-300" />
                    <p className="text-sm font-medium text-white">AI & ML</p>
                    <p className="text-xs text-primary-200">Next-Gen Tech</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300">
                    <Code className="h-12 w-12 mx-auto mb-3 text-green-300" />
                    <p className="text-sm font-medium text-white">Programming</p>
                    <p className="text-xs text-primary-200">Full Stack</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300">
                    <BarChart3 className="h-12 w-12 mx-auto mb-3 text-blue-300" />
                    <p className="text-sm font-medium text-white">Data Science</p>
                    <p className="text-xs text-primary-200">Analytics</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300">
                    <Shield className="h-12 w-12 mx-auto mb-3 text-red-300" />
                    <p className="text-sm font-medium text-white">Security</p>
                    <p className="text-xs text-primary-200">Cyber Defense</p>
                  </div>
                </div>
                
                {/* Learning Progress Indicator */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-primary-800" />
                      </div>
                      <span className="text-primary-100 text-sm">Live Sessions</span>
                    </div>
                    <div className="w-16 h-2 bg-white/20 rounded-full">
                      <div className="w-12 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center">
                        <Target className="h-4 w-4 text-primary-800" />
                      </div>
                      <span className="text-primary-100 text-sm">Projects</span>
                    </div>
                    <div className="w-16 h-2 bg-white/20 rounded-full">
                      <div className="w-10 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-primary-800" />
                      </div>
                      <span className="text-primary-100 text-sm">Certification</span>
                    </div>
                    <div className="w-16 h-2 bg-white/20 rounded-full">
                      <div className="w-14 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Display */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">8+</div>
                    <div className="text-xs text-primary-200">Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">30h</div>
                    <div className="text-xs text-primary-200">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-primary-200">Industry Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnered Colleges Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Institutions</h2>
            <p className="text-lg text-gray-600">Partnered with top-tier colleges across India</p>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite space-x-8">
              {colleges.map((college, index) => (
                <div key={index} className="flex-shrink-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Badge variant="outline" className="text-lg py-2 px-6 bg-white border-primary-200 text-primary-700 hover:bg-primary-50 transition-colors duration-300">
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
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <p className="text-lg text-gray-600">Industry-leading programs designed for success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <div key={index} className="animate-fade-in-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className={`aspect-video ${course.bgColor} flex items-center justify-center overflow-hidden`}>
                    <course.icon className={`h-24 w-24 ${course.iconColor}`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-600 font-medium">{course.enrollments}</span>
                      <Link to={`/course/${course.slug}`}>
                        <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Timeline */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">A comprehensive learning journey designed for your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {timelineSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-500 animate-slide-up hover:transform hover:-translate-y-2 h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 animate-pulse-gentle">
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
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in-scale">
            <div className="max-w-3xl mx-auto">
              <Award className="h-16 w-16 mx-auto mb-6 text-primary-200 animate-bounce-slow" />
              <h2 className="text-3xl font-bold mb-6">Get Certified & Recognized</h2>
              <p className="text-xl text-primary-100 mb-8">
                Upon successful course completion, students receive a <strong>Certificate of Completion</strong> and 
                a <strong>Letter of Recommendation (LOR)</strong> to boost their career prospects.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={handleViewCertificate}
              >
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
