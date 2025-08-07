
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, BookOpen, Brain, Code, BarChart3, Shield, Briefcase, Laptop, DollarSign, Dna, Users, Target, Lightbulb } from "lucide-react";
import { useState } from "react";

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();

  const personalityDevelopmentCurriculum = [
    "Effective Communication (Verbal and Written)",
    "Positive Body Language and Posture",
    "Time Management Strategies",
    "Team Collaboration and Interpersonal Skills",
    "Conflict Resolution Basics",
    "Leadership and Initiative Taking",
    "Emotional Intelligence Development",
    "Public Speaking and Presentation Skills",
    "Goal Setting and Achievement Strategies",
    "Professional Etiquette and Workplace Behavior"
  ];

  const courseData = {
    "ai-ml-python": {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning with hands-on Python programming",
      icon: Brain,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      slug: "ai-ml-python",
      enrollments: "40 Enrolled",
      curriculum: [
        "Introduction to AI and Machine Learning",
        "Python for Data Science",
        "Supervised and Unsupervised Learning",
        "Neural Networks and Deep Learning",
        "Model Evaluation and Optimization",
        "Project: Build a Chatbot",
      ],
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹45,000",
      outcomes: [
        "Build and deploy machine learning models",
        "Understand AI concepts and algorithms",
        "Work with Python libraries like scikit-learn and TensorFlow",
      ],
      instructors: [
        { name: "Dr. Anjali Mehta", bio: "Expert in AI and Data Science with 10+ years of experience" },
        { name: "Rohit Sharma", bio: "Senior Python Developer and ML Engineer" }
      ]
    },
    "python-programming": {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts with real-world projects",
      icon: Code,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      slug: "python-programming",
      enrollments: "0 Enrolled",
      curriculum: [
        "Python Basics and Syntax",
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "File Handling and Exceptions",
        "Web Scraping and APIs",
        "Project: Build a Web Application",
      ],
      duration: "10 weeks",
      level: "Beginner",
      price: "₹30,000",
      outcomes: [
        "Write efficient Python code",
        "Understand core programming concepts",
        "Build real-world applications",
      ],
      instructors: [
        { name: "Suman Gupta", bio: "Software Engineer and Python Trainer" }
      ]
    },
    "data-analysis": {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools",
      icon: BarChart3,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      slug: "data-analysis",
      enrollments: "55 Enrolled",
      curriculum: [
        "Data Cleaning and Preparation",
        "Exploratory Data Analysis",
        "Statistical Analysis",
        "Data Visualization Techniques",
        "Using Excel, SQL, and Python for Analysis",
        "Project: Analyze Sales Data",
      ],
      duration: "8 weeks",
      level: "Intermediate",
      price: "₹35,000",
      outcomes: [
        "Analyze and interpret data effectively",
        "Use tools like Excel, SQL, and Python",
        "Create compelling data visualizations",
      ],
      instructors: [
        { name: "Neha Singh", bio: "Data Analyst with expertise in business intelligence" }
      ]
    },
    "cyber-security": {
      title: "Cyber Security",
      description: "Protect digital assets and learn ethical hacking techniques",
      icon: Shield,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      slug: "cyber-security",
      enrollments: "30 Enrolled",
      curriculum: [
        "Introduction to Cyber Security",
        "Network Security Fundamentals",
        "Ethical Hacking and Penetration Testing",
        "Cryptography Basics",
        "Security Policies and Compliance",
        "Project: Secure a Web Application",
      ],
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹40,000",
      outcomes: [
        "Understand cyber threats and defenses",
        "Perform ethical hacking tests",
        "Implement security best practices",
      ],
      instructors: [
        { name: "Amit Verma", bio: "Certified Ethical Hacker and Security Consultant" }
      ]
    },
    "business-analysis": {
      title: "Business Analysis",
      description: "Bridge the gap between business needs and technical solutions",
      icon: Briefcase,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      slug: "business-analysis",
      enrollments: "0 Enrolled",
      curriculum: [
        "Business Analysis Fundamentals",
        "Requirements Gathering and Documentation",
        "Process Modeling and Improvement",
        "Stakeholder Management",
        "Use Case and User Story Development",
        "Project: Business Case Study",
      ],
      duration: "8 weeks",
      level: "Beginner",
      price: "₹25,000",
      outcomes: [
        "Conduct effective business analysis",
        "Communicate requirements clearly",
        "Support project management and delivery",
      ],
      instructors: [
        { name: "Priya Nair", bio: "Business Analyst with 8 years of industry experience" }
      ]
    },
    "build360": {
      title: "Build360",
      description: "Comprehensive full-stack development program",
      icon: Laptop,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100",
      slug: "build360",
      enrollments: "0 Enrolled",
      curriculum: [
        "Frontend Development with React",
        "Backend Development with Node.js",
        "Database Design and Management",
        "API Development and Integration",
        "DevOps and Deployment",
        "Capstone Project: Build a Full-Stack Application",
      ],
      duration: "16 weeks",
      level: "Advanced",
      price: "₹60,000",
      outcomes: [
        "Develop full-stack web applications",
        "Work with modern development tools",
        "Deploy and maintain production apps",
      ],
      instructors: [
        { name: "Karan Mehta", bio: "Full-Stack Developer and Instructor" }
      ]
    },
    "finance": {
      title: "Finance",
      description: "Financial modeling, analysis, and investment strategies",
      icon: DollarSign,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-100",
      slug: "finance",
      enrollments: "0 Enrolled",
      curriculum: [
        "Financial Accounting Basics",
        "Investment Analysis and Portfolio Management",
        "Financial Modeling Techniques",
        "Risk Management",
        "Corporate Finance Principles",
        "Project: Build a Financial Model",
      ],
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹40,000",
      outcomes: [
        "Understand financial statements",
        "Perform investment analysis",
        "Create financial models",
      ],
      instructors: [
        { name: "Ritu Sharma", bio: "Finance Expert and Consultant" }
      ]
    },
    "bioinformatics": {
      title: "Bioinformatics",
      description: "Apply computational techniques to biological data analysis",
      icon: Dna,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100",
      slug: "bioinformatics",
      enrollments: "0 Enrolled",
      curriculum: [
        "Introduction to Bioinformatics",
        "Genomic Data Analysis",
        "Sequence Alignment and Phylogenetics",
        "Protein Structure Prediction",
        "Data Visualization in Bioinformatics",
        "Project: Analyze DNA Sequences",
      ],
      duration: "12 weeks",
      level: "Advanced",
      price: "₹50,000",
      outcomes: [
        "Analyze biological data computationally",
        "Use bioinformatics tools and databases",
        "Interpret genomic and proteomic data",
      ],
      instructors: [
        { name: "Dr. Kavita Joshi", bio: "Bioinformatics Researcher and Educator" }
      ]
    },
    "personality-development": {
      title: "Personality Development",
      description: "Enhance your personal and professional skills for success",
      icon: Users,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
      slug: "personality-development",
      enrollments: "0 Enrolled",
      curriculum: personalityDevelopmentCurriculum,
      duration: "6 weeks",
      level: "Beginner",
      price: "₹20,000",
      outcomes: [
        "Improve communication and interpersonal skills",
        "Build confidence and leadership qualities",
        "Develop emotional intelligence",
      ],
      instructors: [
        { name: "Sunita Rao", bio: "Soft Skills Trainer and Motivational Speaker" }
      ]
    }
  };

  const course = courseData[courseSlug as keyof typeof courseData];

  const [tabValue, setTabValue] = useState("overview");

  const handleEnrollNow = () => {
    navigate('/enrollment', { state: { course } });
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

      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className={`p-6 rounded-lg ${course.bgColor} flex items-center justify-center w-24 h-24 md:w-32 md:h-32`}>
            <course.icon className={`h-12 w-12 md:h-16 md:w-16 ${course.iconColor}`} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg md:text-xl text-primary-100 mb-6">{course.description}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base">
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {course.duration}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Star className="h-4 w-4" /> {course.level}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" /> {course.price}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-4 w-4" /> {course.enrollments}
              </Badge>
            </div>
            <div className="mt-8">
              <Button className="bg-primary-600 hover:bg-primary-700 text-lg px-8" onClick={handleEnrollNow}>
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={tabValue} onValueChange={setTabValue}>
            <TabsList className="mb-8">
              <TabsTrigger value="overview" className="text-lg font-semibold">Overview</TabsTrigger>
              <TabsTrigger value="curriculum" className="text-lg font-semibold">Curriculum</TabsTrigger>
              <TabsTrigger value="instructors" className="text-lg font-semibold">Instructors</TabsTrigger>
              <TabsTrigger value="outcomes" className="text-lg font-semibold">Outcomes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Course Overview</h2>
              <p className="text-gray-700 text-lg">{course.description}</p>
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700 font-medium">Level: {course.level}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700 font-medium">Duration: {course.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700 font-medium">Price: {course.price}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700 font-medium">Enrollments: {course.enrollments}</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Curriculum</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                {course.curriculum.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="instructors" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Instructors</h2>
              <div className="space-y-4">
                {course.instructors.map((instructor, idx) => (
                  <Card key={idx} className="p-4">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{instructor.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{instructor.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="outcomes" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Learning Outcomes</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                {course.outcomes.map((outcome, idx) => (
                  <li key={idx}>{outcome}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
