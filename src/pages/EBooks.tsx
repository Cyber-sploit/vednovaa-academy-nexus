
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye, Brain, Code, BarChart3, Shield, Briefcase, Laptop, DollarSign, Dna } from "lucide-react";
import { Link } from "react-router-dom";

const EBooks = () => {
  const ebooks = [
    {
      title: "AI/ML with Python",
      description: "Comprehensive guide to artificial intelligence and machine learning",
      pages: "450 pages",
      format: "PDF",
      slug: "ai-ml-python",
      icon: Brain,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Python Programming",
      description: "Complete Python programming handbook for beginners to advanced",
      pages: "320 pages", 
      format: "PDF",
      slug: "python-programming",
      icon: Code,
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Data Analysis",
      description: "Data analysis techniques and tools for modern businesses",
      pages: "280 pages",
      format: "PDF",
      slug: "data-analysis",
      icon: BarChart3,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Cyber Security",
      description: "Essential cybersecurity practices and ethical hacking guide",
      pages: "380 pages",
      format: "PDF",
      slug: "cyber-security",
      icon: Shield,
      iconColor: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "Business Analysis",
      description: "Business analysis methodologies and best practices",
      pages: "240 pages",
      format: "PDF",
      slug: "business-analysis",
      icon: Briefcase,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Build360",
      description: "Full-stack development guide from frontend to backend",
      pages: "520 pages",
      format: "PDF",
      slug: "build360",
      icon: Laptop,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      title: "Finance",
      description: "Financial modeling and investment analysis handbook",
      pages: "300 pages",
      format: "PDF",
      slug: "finance",
      icon: DollarSign,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      title: "Bioinformatics",
      description: "Computational biology and bioinformatics essentials",
      pages: "290 pages",
      format: "PDF",
      slug: "bioinformatics",
      icon: Dna,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100"
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
                <div className={`aspect-[3/4] ${ebook.bgColor} rounded-t-lg overflow-hidden flex items-center justify-center`}>
                  <ebook.icon className={`h-24 w-24 ${ebook.iconColor}`} />
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
