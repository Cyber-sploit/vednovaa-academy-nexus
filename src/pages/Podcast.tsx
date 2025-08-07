
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mic, Brain, Code, BarChart3, Shield, Briefcase, Laptop } from "lucide-react";
import { useState } from "react";

const Podcast = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const episodes = [
    {
      title: "The Future of AI in Education",
      description: "Exploring how artificial intelligence is transforming the learning experience",
      duration: "45 min",
      category: "Educational",
      date: "Dec 15, 2024",
      icon: Brain,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "From Student to Tech Leader",
      description: "Inspiring journey of our alumni who became industry leaders",
      duration: "38 min",
      category: "Student Stories",
      date: "Dec 10, 2024",
      icon: Laptop,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      title: "Overcoming Coding Challenges",
      description: "Motivational episode about persistence in programming",
      duration: "32 min",
      category: "Motivational",
      date: "Dec 5, 2024",
      icon: Code,
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Industry Expert: Data Science Trends",
      description: "Guest interview with a leading data scientist",
      duration: "52 min",
      category: "Guest Interview",
      date: "Nov 30, 2024",
      icon: BarChart3,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Building Your First Startup",
      description: "Essential tips for student entrepreneurs",
      duration: "41 min",
      category: "Educational",
      date: "Nov 25, 2024",
      icon: Briefcase,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Cybersecurity Career Paths",
      description: "Understanding different roles in cybersecurity",
      duration: "36 min",
      category: "Educational",
      date: "Nov 20, 2024",
      icon: Shield,
      iconColor: "text-red-600",
      bgColor: "bg-red-100"
    },
  ];

  const categories = ["All", "Educational", "Motivational", "Guest Interview", "Student Stories"];

  const filteredEpisodes = selectedCategory === "All" 
    ? episodes 
    : episodes.filter(episode => episode.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mic className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vednovaa Podcast</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Inspiring conversations, educational insights, and success stories from the world of technology and innovation
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

      {/* Episodes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEpisodes.map((episode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`relative aspect-video ${episode.bgColor} rounded-t-lg overflow-hidden flex items-center justify-center`}>
                  <episode.icon className={`h-16 w-16 ${episode.iconColor}`} />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black bg-opacity-70 text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {episode.duration}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {episode.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{episode.date}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{episode.title}</CardTitle>
                  <CardDescription className="text-gray-600">{episode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full py-3 px-4 bg-gray-100 rounded-md text-center text-gray-600 font-medium">
                    Coming Soon
                  </div>
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

export default Podcast;
