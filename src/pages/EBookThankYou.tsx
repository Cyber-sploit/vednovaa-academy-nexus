
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, ArrowLeft, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser, Session } from '@supabase/supabase-js';
import { useToast } from "@/hooks/use-toast";

const EBookThankYou = () => {
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
    author: "Vivek Vardhan",
    downloadUrl: "/sample-ebook.pdf",
    image: "/lovable-uploads/3ff1ae8d-5072-4650-bc16-23977d26f4c5.png"
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        // If user logs out, redirect to ebook detail page
        if (!session?.user) {
          navigate(`/ebook-detail/${slug}`);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      // If no user session, redirect to ebook detail page
      if (!session?.user) {
        navigate(`/ebook-detail/${slug}`);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, slug]);

  const handleDownload = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to download this ebook.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    // Create a temporary download link
    const link = document.createElement('a');
    link.href = ebook.downloadUrl;
    link.download = `${ebook.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started",
      description: "Your ebook download has started.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <AlertCircle className="w-5 h-5 mr-2" />
              Access Denied
            </CardTitle>
            <CardDescription>
              You need to be signed in to access this page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/auth">Sign In</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Link to="/ebooks" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to EBooks
          </Link>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">Welcome!</CardTitle>
              <CardDescription className="text-lg">
                You're all set to download your ebook
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-32 h-40 object-cover mx-auto rounded-lg shadow-md mb-3"
                />
                <h3 className="font-semibold text-lg">{ebook.title}</h3>
                <p className="text-gray-600">by {ebook.author}</p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Thank you for your interest! You can now download your ebook.
                </p>
                
                <Button onClick={handleDownload} size="lg" className="w-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download EBook (PDF)
                </Button>
              </div>

              <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <p><strong>Note:</strong> This ebook is for personal use only. Please do not redistribute or share.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EBookThankYou;
