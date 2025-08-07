
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Star, Clock, BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const courseData = {
    "ai-ml-python": {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning with hands-on Python programming. This comprehensive course covers everything from basic machine learning concepts to advanced deep learning techniques.",
      rating: 4.8,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
      curriculum: [
        "Introduction to Python Programming",
        "Data Structures and Algorithms",
        "NumPy and Pandas for Data Manipulation",
        "Data Visualization with Matplotlib and Seaborn",
        "Machine Learning Fundamentals",
        "Supervised Learning Algorithms",
        "Unsupervised Learning Techniques",
        "Deep Learning with TensorFlow and Keras",
        "Neural Networks and CNN",
        "Natural Language Processing",
        "Computer Vision Projects",
        "Model Deployment and Production"
      ]
    },
    "python-programming": {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts with real-world projects. Perfect for beginners and those looking to strengthen their programming foundation.",
      rating: 4.7,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      curriculum: [
        "Python Basics and Syntax",
        "Variables and Data Types",
        "Control Structures and Loops",
        "Functions and Modules",
        "Object-Oriented Programming",
        "File Handling and I/O Operations",
        "Error Handling and Debugging",
        "Working with APIs",
        "Database Integration",
        "Web Scraping Techniques",
        "GUI Development with Tkinter",
        "Final Project Development"
      ]
    },
    "data-analysis": {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools and techniques. Learn to work with real-world datasets and create meaningful visualizations.",
      rating: 4.6,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
      curriculum: [
        "Introduction to Data Analysis",
        "Excel for Data Analysis",
        "SQL Fundamentals",
        "Python for Data Analysis",
        "Pandas and NumPy Libraries",
        "Data Cleaning Techniques",
        "Statistical Analysis",
        "Data Visualization Tools",
        "Tableau Dashboard Creation",
        "Power BI Fundamentals",
        "Predictive Analytics",
        "Case Study Projects"
      ]
    },
    "cyber-security": {
      title: "Cyber Security",
      description: "Protect digital assets and learn ethical hacking techniques. Comprehensive coverage of cybersecurity principles, tools, and best practices.",
      rating: 4.9,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      curriculum: [
        "Cybersecurity Fundamentals",
        "Network Security Basics",
        "Cryptography and Encryption",
        "Ethical Hacking Principles",
        "Penetration Testing Tools",
        "Vulnerability Assessment",
        "Web Application Security",
        "Incident Response Planning",
        "Digital Forensics",
        "Compliance and Risk Management",
        "Security Awareness Training",
        "Hands-on Lab Exercises"
      ]
    },
    "business-analysis": {
      title: "Business Analysis",
      description: "Bridge the gap between business needs and technical solutions. Learn to analyze requirements, create documentation, and drive successful project outcomes.",
      rating: 4.5,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600",
      curriculum: [
        "Business Analysis Fundamentals",
        "Requirements Gathering Techniques",
        "Stakeholder Management",
        "Process Modeling and Mapping",
        "Use Case Development",
        "Gap Analysis Methods",
        "Documentation Best Practices",
        "Agile Business Analysis",
        "Quality Assurance in BA",
        "Project Management Basics",
        "Communication Skills",
        "Real-world Case Studies"
      ]
    },
    "build360": {
      title: "Build360",
      description: "Comprehensive full-stack development program covering frontend, backend, databases, and deployment. Build complete web applications from scratch.",
      rating: 4.8,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600",
      curriculum: [
        "HTML5 and CSS3 Fundamentals",
        "JavaScript ES6+ Features",
        "React.js Development",
        "Node.js and Express.js",
        "Database Design and SQL",
        "MongoDB and NoSQL",
        "RESTful API Development",
        "Authentication and Security",
        "Version Control with Git",
        "Cloud Deployment (AWS/Heroku)",
        "Testing and Debugging",
        "Full-Stack Project Portfolio"
      ]
    },
    "finance": {
      title: "Finance",
      description: "Financial modeling, analysis, and investment strategies. Learn essential finance concepts and tools used in modern financial markets.",
      rating: 4.4,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600",
      curriculum: [
        "Financial Markets Overview",
        "Financial Statement Analysis",
        "Time Value of Money",
        "Risk and Return Analysis",
        "Portfolio Management",
        "Investment Banking Basics",
        "Corporate Finance Principles",
        "Excel for Financial Modeling",
        "Valuation Techniques",
        "Derivatives and Options",
        "Financial Planning Strategies",
        "Case Study Analysis"
      ]
    },
    "bioinformatics": {
      title: "Bioinformatics",
      description: "Apply computational techniques to biological data analysis. Explore the intersection of biology, computer science, and data analysis.",
      rating: 4.6,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      curriculum: [
        "Introduction to Bioinformatics",
        "Biological Databases",
        "Sequence Alignment Algorithms",
        "Genomics and Proteomics",
        "Phylogenetic Analysis",
        "Structural Bioinformatics",
        "Python for Bioinformatics",
        "R for Statistical Analysis",
        "Next-Generation Sequencing",
        "Machine Learning in Biology",
        "Biostatistics Fundamentals",
        "Research Project Development"
      ]
    }
  };

  const course = courseData[courseSlug as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Course Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-primary-100 mb-8">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-primary-100">{course.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-100">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                Enroll Now
              </Button>
            </div>
            
            <div className="animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
              <img 
                src={course.image} 
                alt={course.title}
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-primary-600" />
                <span>Course Curriculum</span>
              </CardTitle>
              <CardDescription>
                Comprehensive curriculum designed to take you from beginner to expert
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>View Full Curriculum ({course.curriculum.length} Topics)</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.curriculum.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <Badge variant="outline" className="text-xs">{index + 1}</Badge>
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
