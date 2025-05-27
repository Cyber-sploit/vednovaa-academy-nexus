
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, FileText } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "10 Essential Skills Every Data Scientist Needs in 2024",
      summary: "Discover the most in-demand skills that will set you apart in the competitive data science landscape",
      author: "Dr. Priya Sharma",
      date: "December 15, 2024",
      category: "Career Advice",
      readTime: "8 min read",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    },
    {
      title: "The Rise of AI in Indian Education: Opportunities and Challenges",
      summary: "An in-depth analysis of how artificial intelligence is reshaping the educational landscape in India",
      author: "Prof. Rajesh Kumar",
      date: "December 12, 2024",
      category: "Industry Trends",
      readTime: "12 min read",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
    },
    {
      title: "From Zero to Hero: A Student's Journey in Cybersecurity",
      summary: "Follow the inspiring transformation of a liberal arts student who became a cybersecurity expert",
      author: "Ankit Verma",
      date: "December 10, 2024",
      category: "Student Success",
      readTime: "6 min read",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    },
    {
      title: "Python vs R: Which Language Should You Choose for Data Analysis?",
      summary: "A comprehensive comparison of Python and R for aspiring data analysts and scientists",
      author: "Dr. Meera Patel",
      date: "December 8, 2024",
      category: "Course Insights",
      readTime: "10 min read",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    },
    {
      title: "Building Your First Machine Learning Model: A Step-by-Step Guide",
      summary: "Learn how to create your first ML model with practical examples and code snippets",
      author: "Vivek Singh",
      date: "December 5, 2024",
      category: "Educational Resources",
      readTime: "15 min read",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600",
    },
    {
      title: "The Future of Work: How Technology is Reshaping Careers",
      summary: "Explore how emerging technologies are creating new career opportunities and transforming existing roles",
      author: "Dr. Sunita Agarwal",
      date: "December 3, 2024",
      category: "Industry Trends",
      readTime: "9 min read",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600",
    },
  ];

  const categories = ["All", "Career Advice", "Industry Trends", "Course Insights", "Educational Resources", "Student Success"];

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
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary-600 hover:bg-primary-700" : ""}
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
            {blogPosts.map((post, index) => (
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
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Read More
                  </Button>
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
