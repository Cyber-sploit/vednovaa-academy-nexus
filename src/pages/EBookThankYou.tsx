
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, BookOpen } from "lucide-react";

const EBookThankYou = () => {
  const { slug } = useParams();

  const ebookData = {
    "cybersecurity-beginners-guide": {
      title: "Break Into Cybersecurity: A Beginner's Guide to Career Roadmaps & Skill Paths",
      downloadLink: "https://drive.google.com/file/d/1LroZW88o9HkAOe86b7AUKu5ke26510hJ/view?usp=sharing"
    }
  };

  const ebook = ebookData[slug as keyof typeof ebookData];

  const handleDownload = () => {
    window.open(ebook.downloadLink, '_blank');
  };

  if (!ebook) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">E-Book Not Found</h1>
            <p className="text-xl text-gray-600">The requested e-book could not be found.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Payment Successful!</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Thank you for your purchase. Your e-book is ready for download.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary-600" />
                Your E-Book is Ready!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {ebook.title}
                </h3>
                <p className="text-gray-600 mb-8">
                  Click the button below to download your purchased e-book. The download link will open in a new tab.
                </p>
                
                <Button 
                  onClick={handleDownload}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download E-Book
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Save the downloaded file to your preferred location</li>
                    <li>• You can access this download link anytime from your email receipt</li>
                    <li>• For any issues, please contact our support team</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EBookThankYou;
