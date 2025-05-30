
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const EBooks = () => {
  const ebooks = [
    {
      title: "AI/ML with Python",
      description: "Comprehensive guide to artificial intelligence and machine learning",
      pages: "450 pages",
      format: "PDF",
      slug: "ai-ml-python",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400"
    },
    {
      title: "Python Programming",
      description: "Complete Python programming handbook for beginners to advanced",
      pages: "320 pages", 
      format: "PDF",
      slug: "python-programming",
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400"
    },
    {
      title: "Data Analysis",
      description: "Data analysis techniques and tools for modern businesses",
      pages: "280 pages",
      format: "PDF",
      slug: "data-analysis",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
    },
    {
      title: "Cyber Security",
      description: "Essential cybersecurity practices and ethical hacking guide",
      pages: "380 pages",
      format: "PDF",
      slug: "cyber-security",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400"
    },
    {
      title: "Business Analysis",
      description: "Business analysis methodologies and best practices",
      pages: "240 pages",
      format: "PDF",
      slug: "business-analysis",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400"
    },
    {
      title: "Build360",
      description: "Full-stack development guide from frontend to backend",
      pages: "520 pages",
      format: "PDF",
      slug: "build360",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400"
    },
    {
      title: "Finance",
      description: "Financial modeling and investment analysis handbook",
      pages: "300 pages",
      format: "PDF",
      slug: "finance",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400"
    },
    {
      title: "Bioinformatics",
      description: "Computational biology and bioinformatics essentials",
      pages: "290 pages",
      format: "PDF",
      slug: "bioinformatics",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
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
              Access our comprehensive collection of e-books designed to supplement your learning journey
            </p>
          </div>
        </div>
      </section>

      {/* E-books Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ebooks.map((ebook, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={ebook.thumbnail} 
                    alt={ebook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{ebook.title}</CardTitle>
                  <CardDescription className="text-gray-600">{ebook.description}</CardDescription>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{ebook.pages}</span>
                    <span>{ebook.format}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to={`/ebook/${ebook.slug}`}>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
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
