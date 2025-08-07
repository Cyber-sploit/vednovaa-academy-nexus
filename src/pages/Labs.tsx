
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Code, Settings, PlayCircle } from "lucide-react";

const Labs = () => {
  const labs = [
    {
      title: "AI/ML with Python",
      description: "Interactive machine learning experiments and model training",
      tools: ["Jupyter", "TensorFlow", "Scikit-learn"],
      status: "Active",
    },
    {
      title: "Python Programming",
      description: "Hands-on coding environment for Python development",
      tools: ["VS Code", "Python 3.9", "Git"],
      status: "Active",
    },
    {
      title: "Data Analysis",
      description: "Real-world datasets for analysis and visualization",
      tools: ["Pandas", "Matplotlib", "Tableau"],
      status: "Active",
    },
    {
      title: "Cyber Security",
      description: "Secure sandbox for ethical hacking and penetration testing",
      tools: ["Kali Linux", "Metasploit", "Wireshark"],
      status: "Active",
    },
    {
      title: "Build360",
      description: "Full-stack development environment with cloud deployment",
      tools: ["Docker", "AWS", "MongoDB"],
      status: "Active",
    },
    {
      title: "Finance",
      description: "Financial modeling and trading simulation environment",
      tools: ["Excel", "Bloomberg API", "Python"],
      status: "Active",
    },
  ];

  const benefits = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Real-time Practice",
      description: "Access to live environments for immediate hands-on experience",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Sandbox Environments",
      description: "Safe, isolated spaces to experiment without risk",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Guided Experiments",
      description: "Step-by-step instructions and mentorship support",
    },
    {
      icon: <PlayCircle className="h-8 w-8" />,
      title: "Project Testing",
      description: "Test and deploy your projects in production-like environments",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Monitor className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Virtual Labs</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              State-of-the-art virtual laboratories for hands-on learning and experimentation
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Labs?</h2>
            <p className="text-lg text-gray-600">Experience the future of practical learning</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Labs</h2>
            <p className="text-lg text-gray-600">Choose from our comprehensive lab environments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-gray-900">{lab.title}</CardTitle>
                    <Badge variant="default" className="bg-green-100 text-green-800">{lab.status}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">{lab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Tools Available:</p>
                    <div className="flex flex-wrap gap-2">
                      {lab.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Access Lab
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

export default Labs;
