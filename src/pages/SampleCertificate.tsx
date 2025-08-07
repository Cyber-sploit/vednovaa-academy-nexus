
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Download, Printer } from "lucide-react";
import { Link } from "react-router-dom";

const SampleCertificate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <Award className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sample Certificate</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Preview of the certificate you'll receive upon successful course completion
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-primary-200 shadow-2xl animate-fade-in-scale">
            <CardContent className="p-12">
              {/* Certificate Header */}
              <div className="text-center mb-8">
                <div className="bg-primary-600 text-white px-6 py-3 rounded-full inline-block mb-6">
                  <h2 className="text-2xl font-bold">VEDNOVAA ACADEMY</h2>
                </div>
                <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">
                  CERTIFICATE OF COMPLETION
                </h1>
                <div className="w-32 h-1 bg-primary-600 mx-auto"></div>
              </div>

              {/* Certificate Body */}
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 mb-6">This is to certify that</p>
                
                <div className="bg-white border-2 border-dashed border-primary-300 px-8 py-4 rounded-lg mb-6 inline-block">
                  <h3 className="text-3xl font-bold text-primary-700">[Student Name]</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-2">has successfully completed the course</p>
                
                <div className="bg-primary-100 border border-primary-300 px-6 py-3 rounded-lg mb-6 inline-block">
                  <h4 className="text-2xl font-semibold text-primary-800">[Course Title]</h4>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  with a duration of <strong>25 hours</strong> and has demonstrated proficiency in the required skills and knowledge.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
                  <div>
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded mb-2">
                      <span className="text-gray-500">[Date of Issue]</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Date of Completion</p>
                  </div>
                  
                  <div>
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded mb-2">
                      <span className="text-gray-500">[Certificate ID]</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Certificate Number</p>
                  </div>
                  
                  <div>
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded mb-2">
                      <span className="text-gray-500">[Grade/Score]</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Final Grade</p>
                  </div>
                </div>
              </div>

              {/* Signature Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-8 border-t border-gray-300">
                <div className="text-center">
                  <div className="border-t-2 border-gray-400 pt-2 mb-2">
                    <p className="font-semibold text-gray-700">Director Signature</p>
                  </div>
                  <p className="text-sm text-gray-600">Vednovaa Academy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-100 border-2 border-primary-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-sm">OFFICIAL SEAL</span>
                  </div>
                  <p className="text-sm text-gray-600">Academy Seal</p>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  This certificate verifies the successful completion of the course curriculum and assessments.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  For verification, visit: www.vednovaa.com/verify
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center mt-8 space-x-4">
            <Button variant="outline" className="space-x-2">
              <Printer className="h-4 w-4" />
              <span>Print Preview</span>
            </Button>
            <Button variant="outline" className="space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Sample</span>
            </Button>
            <Link to="/">
              <Button className="bg-primary-600 hover:bg-primary-700 space-x-2">
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SampleCertificate;
