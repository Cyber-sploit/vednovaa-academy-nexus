
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const EBooks = () => {
  const ebooks = [
    {
      title: "Python Programming Mastery: From Beginner to Expert",
      description: "Complete guide to Python programming with practical examples, projects, and advanced concepts.",
      slug: "python-programming-mastery",
      coverImage: "/placeholder.svg"
    },
    {
      title: "AI/ML Complete Handbook: Theory to Practice",
      description: "Comprehensive guide covering machine learning algorithms, neural networks, and real-world applications.",
      slug: "ai-ml-handbook",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Data Analysis with Python: Pandas & NumPy Guide",
      description: "Master data manipulation, analysis, and visualization using Python's most powerful libraries.",
      slug: "data-analysis-python",
      coverImage: "/placeholder.svg"
    },
    {
      title: "Cybersecurity Fundamentals: Protect & Defend",
      description: "Essential cybersecurity concepts, ethical hacking techniques, and network security practices.",
      slug: "cybersecurity-fundamentals",
      coverImage: "/placeholder.svg"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sample E-Books</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our collection of comprehensive learning resources and guides
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
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full bg-primary-600 hover:bg-primary-700" disabled>
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Coming Soon
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

export default EBooks;
