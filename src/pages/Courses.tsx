
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Code, BarChart3, Shield, Briefcase, Laptop, DollarSign, Dna } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning with hands-on Python programming",
      icon: Brain,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      slug: "ai-ml-python",
      enrollments: "40 Enrolled"
    },
    {
      title: "Python Programming", 
      description: "Learn Python from basics to advanced concepts with real-world projects",
      icon: Code,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      slug: "python-programming",
      enrollments: "0 Enrolled"
    },
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools",
      icon: BarChart3,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      slug: "data-analysis",
      enrollments: "55 Enrolled"
    },
    {
      title: "Cyber Security",
      description: "Protect digital assets and learn ethical hacking techniques", 
      icon: Shield,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      slug: "cyber-security",
      enrollments: "30 Enrolled"
    },
    {
      title: "Business Analysis",
      description: "Bridge the gap between business needs and technical solutions",
      icon: Briefcase,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      slug: "business-analysis",
      enrollments: "0 Enrolled"
    },
    {
      title: "Build360",
      description: "Comprehensive full-stack development program",
      icon: Laptop,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100",
      slug: "build360",
      enrollments: "0 Enrolled"
    },
    {
      title: "Finance",
      description: "Financial modeling, analysis, and investment strategies",
      icon: DollarSign,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-100",
      slug: "finance",
      enrollments: "0 Enrolled"
    },
    {
      title: "Bioinformatics",
      description: "Apply computational techniques to biological data analysis",
      icon: Dna,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100",
      slug: "bioinformatics",
      enrollments: "0 Enrolled"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive programs designed to equip you with industry-relevant skills and knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in h-full flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`aspect-video ${course.bgColor} flex items-center justify-center rounded-t-lg overflow-hidden`}>
                  <course.icon className={`h-16 w-16 ${course.iconColor}`} />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg font-semibold text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  <p className="text-primary-600 font-medium text-sm">{course.enrollments}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={`/course/${course.slug}`} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
