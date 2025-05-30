
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning with hands-on Python programming",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      slug: "ai-ml-python"
    },
    {
      title: "Python Programming", 
      description: "Learn Python from basics to advanced concepts with real-world projects",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
      slug: "python-programming"
    },
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      slug: "data-analysis"
    },
    {
      title: "Cyber Security",
      description: "Protect digital assets and learn ethical hacking techniques", 
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
      slug: "cyber-security"
    },
    {
      title: "Business Analysis",
      description: "Bridge the gap between business needs and technical solutions",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
      slug: "business-analysis"
    },
    {
      title: "Build360",
      description: "Comprehensive full-stack development program",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600",
      slug: "build360"
    },
    {
      title: "Finance",
      description: "Financial modeling, analysis, and investment strategies",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600",
      slug: "finance"
    },
    {
      title: "Bioinformatics",
      description: "Apply computational techniques to biological data analysis",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
      slug: "bioinformatics"
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  <p className="text-primary-600 font-medium text-sm">0 Enrolled</p>
                </CardHeader>
                <CardContent>
                  <Link to={`/course/${course.slug}`}>
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
