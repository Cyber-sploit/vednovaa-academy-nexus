import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import InteractiveCard from "@/components/InteractiveCard";
import SectionDivider from "@/components/SectionDivider";
import GradientText from "@/components/GradientText";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Clock, GraduationCap, Target, Lightbulb, Brain, Code, Shield, BarChart3, TrendingUp, Star, Database, FlaskConical, DollarSign, Dna, ChevronRight, Play, Sparkles, Quote, Zap, Globe, Rocket, HeartHandshake } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      enrollments: "40 Enrolled",
      icon: Brain,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      slug: "ai-ml-python"
    },
    {
      title: "Data Analysis", 
      description: "Transform data into actionable insights",
      enrollments: "55 Enrolled",
      icon: BarChart3,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      slug: "data-analysis"
    },
    {
      title: "Cyber Security",
      description: "Protect digital assets and networks", 
      enrollments: "30 Enrolled",
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float-delayed blur-sm"></div>
          <div className="absolute top-40 right-40 w-16 h-16 bg-white/10 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute top-60 left-1/3 w-20 h-20 bg-primary-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300/30 rounded-full animate-bounce-slow"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">India's Premier Tech Academy</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-slide-down">
                Shape Your Future with
                <GradientText className="block text-5xl md:text-7xl lg:text-8xl mt-2">
                  Next-Gen Education
                </GradientText>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl animate-fade-in-up animation-delay-300 leading-relaxed">
                Join thousands of students mastering cutting-edge skills in AI, Data Science, 
                Cybersecurity, and more at India's premier educational academy.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-8 animate-fade-in-up animation-delay-600">
                {[
                  { value: 5000, suffix: "+", label: "Students Trained" },
                  { value: 95, suffix: "%", label: "Placement Rate" },
                  { value: 50, suffix: "+", label: "Industry Partners" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">
                      <StatsCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-900">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-elegant hover:shadow-glow group"
                  onClick={handleEnquireNow}
                >
                  Enquire Now
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent/10 backdrop-blur-sm text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  onClick={handleExploreCourses}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
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

      <SectionDivider variant="wave" />
      
      {/* Partnered Colleges Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Trusted by <GradientText>Leading Institutions</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partnered with top-tier colleges across India to deliver world-class education
            </p>
          </div>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-infinite space-x-8 py-4">
              {[...colleges, ...colleges].map((college, index) => (
                <div key={index} className="flex-shrink-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Badge 
                    variant="outline" 
                    className="text-lg py-3 px-6 bg-background/80 backdrop-blur-sm border-border hover:bg-accent hover:border-primary/50 transition-all duration-300 shadow-soft hover:shadow-elegant whitespace-nowrap"
                  >
                    {college}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Popular <GradientText>Courses</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Industry-leading programs designed for success with hands-on learning and expert mentorship
            </p>
            <div className="flex justify-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Top Rated Courses
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <div key={index} className="animate-fade-in-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <InteractiveCard className="h-full group" hoverLift={true}>
                  <div className={`aspect-video ${course.bgColor} flex items-center justify-center overflow-hidden rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <course.icon className={`h-24 w-24 ${course.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {course.enrollments}
                      </span>
                      <Link to={`/course/${course.slug}`}>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant group">
                          Learn More
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </InteractiveCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="curved" />
      
      {/* What We Offer Timeline */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What <GradientText>We Offer</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive learning journey designed for your success with industry-relevant skills and practical experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {timelineSteps.map((step, index) => (
              <InteractiveCard 
                key={index} 
                className="text-center h-full group"
                hoverLift={true}
                glowEffect={true}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-soft">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {/* Connection Line */}
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            
            <div className="relative p-8 md:p-16 text-primary-foreground text-center animate-fade-in-scale">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-bounce-slow">
                  <Award className="h-10 w-10 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  Get <span className="text-yellow-300">Certified</span> & Recognized
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Upon successful course completion, students receive a <strong>Certificate of Completion</strong> and 
                  a <strong>Letter of Recommendation (LOR)</strong> to boost their career prospects.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-yellow-900" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Industry Certificate</h3>
                    <p className="text-white/80 text-sm">Recognized by top companies and industry leaders</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Recommendation Letter</h3>
                    <p className="text-white/80 text-sm">Professional LOR to enhance your profile</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-elegant hover:shadow-glow group"
                  onClick={handleViewCertificate}
                >
                  View Sample Certificate
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Success Stories */}
      <SuccessStories />

      {/* Industry Insights Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Industry Insights
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Stay Ahead with <GradientText>Industry Trends</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get insights into the latest tech trends and career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI/ML Job Market Growth",
                stat: "40% YoY",
                description: "AI/ML roles are growing 40% year-over-year in India",
                icon: TrendingUp,
                color: "text-green-600",
                bgColor: "bg-green-100"
              },
              {
                title: "Cybersecurity Demand",
                stat: "3.5M Jobs",
                description: "Global cybersecurity workforce shortage of 3.5 million",
                icon: Shield,
                color: "text-red-600",
                bgColor: "bg-red-100"
              },
              {
                title: "Data Science Salaries",
                stat: "₹8-25L",
                description: "Average data scientist salary ranges from ₹8-25 LPA",
                icon: BarChart3,
                color: "text-blue-600",
                bgColor: "bg-blue-100"
              }
            ].map((insight, index) => (
              <InteractiveCard 
                key={index}
                className="text-center group"
                hoverLift={true}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 ${insight.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <insight.icon className={`h-8 w-8 ${insight.color}`} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{insight.title}</h3>
                  <div className="text-3xl font-bold text-primary">{insight.stat}</div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
              <Quote className="h-4 w-4 mr-2" />
              Student Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What Our <GradientText>Students Say</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from students who transformed their careers with us
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Rocket className="h-16 w-16 mx-auto text-yellow-300" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of successful professionals who started their journey with Vednovaa Academy. 
                Your dream career in tech is just one click away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-elegant hover:shadow-glow group"
                onClick={handleEnquireNow}
              >
                <HeartHandshake className="mr-2 h-5 w-5" />
                Start Your Journey Today
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent/10 backdrop-blur-sm text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleExploreCourses}
              >
                Explore All Courses
              </Button>
            </div>

            <div className="pt-8 text-center">
              <p className="text-white/80 text-sm">
                🚀 Join the tech revolution • 💼 Guaranteed placement support • 🎓 Industry-recognized certificates
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
