
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EBooks = () => {
  const ebooks = [
    {
      title: "Break Into Cybersecurity: A Beginner's Guide to Career Roadmaps & Skill Paths",
      description: "Your complete guide to starting a successful cybersecurity career with clear roadmaps and actionable plans.",
      price: "₹99",
      slug: "cybersecurity-beginners-guide",
      coverImage: "/lovable-uploads/4cc44e3c-0bb3-4357-bbcb-b0dd68dba890.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Library</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Purchase and download our comprehensive e-books to accelerate your learning journey
            </p>
          </div>
        </div>
      </section>

      {/* E-books Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                  <img 
                    src={ebook.coverImage} 
                    alt={ebook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{ebook.title}</CardTitle>
                  <CardDescription className="text-gray-600">{ebook.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary-600">{ebook.price}</div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to={`/ebook-detail/${ebook.slug}`}>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Now
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

export default EBooks;
