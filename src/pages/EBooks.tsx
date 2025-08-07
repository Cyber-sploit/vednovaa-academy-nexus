
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
      slug: "ai-ml-python"
    },
    {
      title: "Python Programming",
      description: "Complete Python programming handbook for beginners to advanced",
      pages: "320 pages", 
      format: "PDF",
      slug: "python-programming"
    },
    {
      title: "Data Analysis",
      description: "Data analysis techniques and tools for modern businesses",
      pages: "280 pages",
      format: "PDF",
      slug: "data-analysis"
    },
    {
      title: "Cyber Security",
      description: "Essential cybersecurity practices and ethical hacking guide",
      pages: "380 pages",
      format: "PDF",
      slug: "cyber-security"
    },
    {
      title: "Business Analysis",
      description: "Business analysis methodologies and best practices",
      pages: "240 pages",
      format: "PDF",
      slug: "business-analysis"
    },
    {
      title: "Build360",
      description: "Full-stack development guide from frontend to backend",
      pages: "520 pages",
      format: "PDF",
      slug: "build360"
    },
    {
      title: "Finance",
      description: "Financial modeling and investment analysis handbook",
      pages: "300 pages",
      format: "PDF",
      slug: "finance"
    },
    {
      title: "Bioinformatics",
      description: "Computational biology and bioinformatics essentials",
      pages: "290 pages",
      format: "PDF",
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
                <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary-600" />
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
