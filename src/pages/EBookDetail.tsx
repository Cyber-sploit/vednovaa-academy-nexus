
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Clock, Star, User, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser, Session } from '@supabase/supabase-js';
import { useToast } from "@/hooks/use-toast";

const EBookDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock ebook data - replace with actual data fetching
  const ebook = {
    id: 1,
    title: "Complete Guide to Web Development",
    description: "Master modern web development with React, Node.js, and advanced techniques. This comprehensive guide covers everything from basics to advanced concepts.",
    fullDescription: "This ebook is your complete roadmap to becoming a proficient web developer. Starting from the fundamentals of HTML, CSS, and JavaScript, we'll guide you through modern frameworks like React and backend development with Node.js. You'll learn about database design, API development, deployment strategies, and best practices used in the industry. Perfect for beginners and intermediate developers looking to level up their skills.",
    author: "Vivek Vardhan",
    category: "Web Development",
    pages: 250,
    publishDate: "2024",
    rating: 4.8,
    price: "₹99",
    image: "/lovable-uploads/3ff1ae8d-5072-4650-bc16-23977d26f4c5.png",
    downloadUrl: "/sample-ebook.pdf",
    tableOfContents: [
      "Introduction to Web Development",
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+ Features",
      "React Development",
      "Node.js & Express",
      "Database Design",
      "API Development",
      "Deployment & DevOps"
    ]
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleDownloadClick = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to download this ebook.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    // Redirect to thank you page with authentication
    navigate(`/ebook-thankyou/${slug}`);
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <Link to="/ebooks" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to EBooks
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Book Cover and Basic Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-64 h-80 object-cover mx-auto rounded-lg shadow-lg"
                  />
                  <div className="mt-4 space-y-2">
                    <Badge variant="secondary" className="text-sm">
                      {ebook.category}
                    </Badge>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {ebook.rating} / 5.0
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Ready to Download?</CardTitle>
                <CardDescription>
                  {!user ? "Sign in to download this ebook" : "Click below to proceed with download"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!user ? (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      You need to sign in to download this ebook. Create a free account or sign in to continue.
                    </p>
                    <Button onClick={handleSignIn} className="w-full" size="lg">
                      <User className="w-4 h-4 mr-2" />
                      Sign In to Download
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      You're signed in as <strong>{user.email}</strong>
                    </p>
                    <Button onClick={handleDownloadClick} className="w-full" size="lg">
                      <Download className="w-4 h-4 mr-2" />
                      Proceed to Download
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{ebook.title}</CardTitle>
                <CardDescription className="text-lg">by {ebook.author}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{ebook.fullDescription}</p>
                
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">{ebook.pages} pages</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Published {ebook.publishDate}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Table of Contents</h3>
                  <ul className="space-y-2">
                    {ebook.tableOfContents.map((chapter, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-700">{chapter}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBookDetail;
