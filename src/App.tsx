
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import EBooks from "./pages/EBooks";
import EBookPreview from "./pages/EBookPreview";
import EBookDetail from "./pages/EBookDetail";
import EBookVerify from "./pages/EBookVerify";
import EBookThankYou from "./pages/EBookThankYou";
import Labs from "./pages/Labs";
import Podcast from "./pages/Podcast";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import SampleCertificate from "./pages/SampleCertificate";
import ReferNow from "./pages/ReferNow";
import Enrollment from "./pages/Enrollment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseSlug" element={<CourseDetail />} />
            <Route path="/ebooks" element={<EBooks />} />
            <Route path="/ebook/:ebookSlug" element={<EBookPreview />} />
            <Route path="/ebook-detail/:slug" element={<EBookDetail />} />
            <Route path="/ebook/:slug/verify" element={<EBookVerify />} />
            <Route path="/ebook/:slug/thank-you" element={<EBookThankYou />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:blogSlug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sample-certificate" element={<SampleCertificate />} />
            <Route path="/refer-now" element={<ReferNow />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
