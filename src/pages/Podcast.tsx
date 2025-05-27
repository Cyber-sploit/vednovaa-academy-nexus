import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mic } from "lucide-react";

const Podcast = () => {
  const episodes = [
    {
      title: "The Future of AI in Education",
      description: "Exploring how artificial intelligence is transforming the learning experience",
      duration: "45 min",
      category: "Educational",
      date: "Dec 15, 2024",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
    },
    {
      title: "From Student to Tech Leader",
      description: "Inspiring journey of our alumni who became industry leaders",
      duration: "38 min",
      category: "Student Stories",
      date: "Dec 10, 2024",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
    },
    {
      title: "Overcoming Coding Challenges",
      description: "Motivational episode about persistence in programming",
      duration: "32 min",
      category: "Motivational",
      date: "Dec 5, 2024",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    },
    {
      title: "Industry Expert: Data Science Trends",
      description: "Guest interview with a leading data scientist",
      duration: "52 min",
      category: "Guest Interview",
      date: "Nov 30, 2024",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    },
    {
      title: "Building Your First Startup",
      description: "Essential tips for student entrepreneurs",
      duration: "41 min",
      category: "Educational",
      date: "Nov 25, 2024",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400",
    },
    {
      title: "Cybersecurity Career Paths",
      description: "Understanding different roles in cybersecurity",
      duration: "36 min",
      category: "Educational",
      date: "Nov 20, 2024",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400",
    },
  ];

  const categories = ["All", "Educational", "Motivational", "Guest Interview", "Student Stories"];

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
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-primary-600 hover:bg-primary-700" : ""}
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
            {episodes.map((episode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={episode.thumbnail} 
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
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
