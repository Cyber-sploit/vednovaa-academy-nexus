
import { useParams, Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const courseData = {
    "ai-ml-python": {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning with hands-on Python programming. This comprehensive course covers everything from basic machine learning concepts to advanced deep learning techniques.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      curriculum: [
        "Introduction to Python Programming and AI Fundamentals",
        "Data Structures and Mathematical Foundations",
        "NumPy and Pandas for Data Manipulation and Analysis",
        "Data Visualization with Matplotlib and Seaborn",
        "Machine Learning Theory and Algorithms",
        "Supervised Learning: Regression and Classification",
        "Unsupervised Learning: Clustering and Dimensionality Reduction",
        "Deep Learning with TensorFlow and Keras",
        "Neural Networks and Convolutional Neural Networks",
        "Natural Language Processing and Text Analytics",
        "Computer Vision and Image Processing Projects",
        "Model Deployment and Production Implementation",
        "Case Study: Building an AI-Powered Recommendation System",
        "Capstone Project: End-to-End ML Solution"
      ]
    },
    "python-programming": {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts with real-world projects. Perfect for beginners and those looking to strengthen their programming foundation.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
      curriculum: [
        "Python Basics: Syntax, Variables, and Data Types",
        "Control Structures: Loops, Conditionals, and Logic",
        "Functions, Modules, and Code Organization",
        "Object-Oriented Programming Fundamentals",
        "File Handling and Input/Output Operations",
        "Error Handling and Exception Management",
        "Working with APIs and Web Services",
        "Database Integration with SQLite and MySQL",
        "Web Scraping with Beautiful Soup and Selenium",
        "GUI Development with Tkinter Framework",
        "Testing and Debugging Best Practices",
        "Case Study: Building a Web Scraper Application",
        "Case Study: Creating a Desktop Task Manager",
        "Final Project: Portfolio-Ready Python Application"
      ]
    },
    "data-analysis": {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools and techniques. Learn to work with real-world datasets and create meaningful visualizations.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      curriculum: [
        "Introduction to Data Analysis and Statistical Thinking",
        "Excel for Data Analysis: Advanced Functions and Formulas",
        "SQL Fundamentals for Data Retrieval and Manipulation",
        "Python for Data Analysis: NumPy and Pandas",
        "Data Cleaning and Preprocessing Techniques",
        "Exploratory Data Analysis and Statistical Methods",
        "Data Visualization with Python Libraries",
        "Tableau Dashboard Creation and Storytelling",
        "Power BI Fundamentals and Report Building",
        "Predictive Analytics and Forecasting Models",
        "Case Study: Sales Performance Analysis",
        "Case Study: Customer Behavior Analytics",
        "Case Study: Financial Data Analysis",
        "Final Project: Complete Business Intelligence Solution"
      ]
    },
    "cyber-security": {
      title: "Cyber Security",
      description: "Protect digital assets and learn ethical hacking techniques. Comprehensive coverage of cybersecurity principles, tools, and best practices.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
      curriculum: [
        "Cybersecurity Fundamentals and Threat Landscape",
        "Network Security Architecture and Protocols",
        "Cryptography and Encryption Technologies",
        "Ethical Hacking Principles and Methodologies",
        "Penetration Testing Tools and Techniques",
        "Vulnerability Assessment and Risk Management",
        "Web Application Security and OWASP Top 10",
        "Incident Response Planning and Management",
        "Digital Forensics and Evidence Collection",
        "Compliance Frameworks and Risk Assessment",
        "Security Awareness Training and Social Engineering",
        "Case Study: Network Security Assessment",
        "Case Study: Web Application Penetration Testing",
        "Hands-on Lab: Complete Security Audit Project"
      ]
    },
    "business-analysis": {
      title: "Business Analysis",
      description: "Bridge the gap between business needs and technical solutions. Learn to analyze requirements, create documentation, and drive successful project outcomes.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
      curriculum: [
        "Business Analysis Fundamentals and Role Definition",
        "Requirements Gathering Techniques and Best Practices",
        "Stakeholder Management and Communication Strategies",
        "Process Modeling and Business Process Mapping",
        "Use Case Development and User Story Writing",
        "Gap Analysis Methods and Solution Assessment",
        "Documentation Standards and Technical Writing",
        "Agile Business Analysis and Scrum Framework",
        "Quality Assurance in Business Analysis",
        "Project Management Essentials for Business Analysts",
        "Data Analysis and Reporting for Business Insights",
        "Case Study: Digital Transformation Project",
        "Case Study: Process Improvement Initiative",
        "Capstone Project: Complete BA Deliverable Portfolio"
      ]
    },
    "build360": {
      title: "Build360",
      description: "Comprehensive full-stack development program covering frontend, backend, databases, and deployment. Build complete web applications from scratch.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600",
      curriculum: [
        "HTML5 Fundamentals and Semantic Web Structure",
        "CSS3 Advanced Styling and Responsive Design",
        "JavaScript ES6+ Features and Modern Programming",
        "React.js Component-Based Development",
        "State Management with Redux and Context API",
        "Node.js Server-Side Development",
        "Express.js Framework and RESTful API Design",
        "Database Design with SQL and NoSQL (MongoDB)",
        "Authentication and Authorization Implementation",
        "Version Control with Git and GitHub Workflows",
        "Cloud Deployment with AWS and Heroku",
        "Testing Strategies and Debugging Techniques",
        "Case Study: E-commerce Platform Development",
        "Full-Stack Project Portfolio Development"
      ]
    },
    "finance": {
      title: "Finance",
      description: "Financial modeling, analysis, and investment strategies. Learn essential finance concepts and tools used in modern financial markets.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600",
      curriculum: [
        "Financial Markets Overview and Investment Fundamentals",
        "Financial Statement Analysis and Interpretation",
        "Time Value of Money and Present Value Calculations",
        "Risk and Return Analysis in Investment Decisions",
        "Portfolio Management and Asset Allocation",
        "Investment Banking Operations and Services",
        "Corporate Finance Principles and Capital Structure",
        "Excel for Financial Modeling and Analysis",
        "Valuation Techniques and Company Assessment",
        "Derivatives, Options, and Risk Management",
        "Financial Planning and Personal Finance Strategies",
        "Case Study: IPO Analysis and Valuation",
        "Case Study: Merger and Acquisition Assessment",
        "Final Project: Comprehensive Investment Portfolio"
      ]
    },
    "bioinformatics": {
      title: "Bioinformatics",
      description: "Apply computational techniques to biological data analysis. Explore the intersection of biology, computer science, and data analysis.",
      rating: 0,
      duration: "25 Hours",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
      curriculum: [
        "Introduction to Bioinformatics and Computational Biology",
        "Biological Databases and Data Resources",
        "Sequence Alignment Algorithms and Tools",
        "Genomics and Proteomics Data Analysis",
        "Phylogenetic Analysis and Evolutionary Studies",
        "Structural Bioinformatics and Protein Modeling",
        "Python Programming for Biological Data",
        "R for Statistical Analysis in Life Sciences",
        "Next-Generation Sequencing Data Processing",
        "Machine Learning Applications in Biology",
        "Biostatistics and Experimental Design",
        "Case Study: Genome-Wide Association Studies",
        "Case Study: Drug Discovery and Molecular Docking",
        "Research Project: Computational Biology Investigation"
      ]
    }
  };

  const course = courseData[courseSlug as keyof typeof courseData];

  const handleEnrollNow = () => {
    navigate('/enrollment');
  };

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
                        className="h-5 w-5 text-gray-300" 
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
              
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-primary-50"
                onClick={handleEnrollNow}
              >
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
                  <div className="grid grid-cols-1 gap-4">
                    {course.curriculum.map((topic, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Badge variant="outline" className="text-xs mt-1">{index + 1}</Badge>
                        <span className="text-sm flex-1">{topic}</span>
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
