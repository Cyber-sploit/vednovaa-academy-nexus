
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "10 Essential Skills Every Data Scientist Needs in 2024",
      summary: "Discover the most in-demand skills that will set you apart in the competitive data science landscape",
      author: "Dr. Priya Sharma",
      date: "December 15, 2024",
      category: "Career Advice",
      readTime: "8 min read",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      slug: "data-scientist-skills-2024"
    },
    {
      title: "The Rise of AI in Indian Education: Opportunities and Challenges",
      summary: "An in-depth analysis of how artificial intelligence is reshaping the educational landscape in India",
      author: "Prof. Rajesh Kumar",
      date: "December 12, 2024", 
      category: "Industry Trends",
      readTime: "12 min read",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      slug: "ai-indian-education"
    },
    {
      title: "From Zero to Hero: A Student's Journey in Cybersecurity",
      summary: "Follow the inspiring transformation of a liberal arts student who became a cybersecurity expert",
      author: "Ankit Verma",
      date: "December 10, 2024",
      category: "Student Success",
      readTime: "6 min read",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
      slug: "student-cybersecurity-journey"
    },
    {
      title: "Python vs R: Which Language Should You Choose for Data Analysis?",
      summary: "A comprehensive comparison of Python and R for aspiring data analysts and scientists",
      author: "Dr. Meera Patel",
      date: "December 8, 2024",
      category: "Course Insights",
      readTime: "10 min read",
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
      slug: "python-vs-r-comparison"
    },
    {
      title: "Building Your First Machine Learning Model: A Step-by-Step Guide",
      summary: "Learn how to create your first ML model with practical examples and code snippets",
      author: "Vivek Singh",
      date: "December 5, 2024",
      category: "Educational Resources",
      readTime: "15 min read",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
      slug: "first-ml-model-guide"
    },
    {
      title: "The Future of Work: How Technology is Reshaping Careers",
      summary: "Explore how emerging technologies are creating new career opportunities and transforming existing roles",
      author: "Dr. Sunita Agarwal",
      date: "December 3, 2024",
      category: "Industry Trends",
      readTime: "9 min read",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600",
      slug: "future-of-work-technology"
    },
  ];

  const categories = ["All", "Career Advice", "Industry Trends", "Course Insights", "Educational Resources", "Student Success"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Hub</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and educational resources from our expert faculty and industry professionals
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary-600 hover:bg-primary-700" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">{post.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Read More
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

export default Blogs;
