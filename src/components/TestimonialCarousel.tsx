import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Data Scientist",
    company: "TechCorp India",
    content: "Vednovaa's AI/ML course transformed my career. The hands-on approach and industry mentorship helped me land my dream job. The instructors are phenomenal!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Cybersecurity Analyst",
    company: "SecureNet Solutions",
    content: "The cybersecurity program is outstanding. Real-world scenarios, ethical hacking labs, and expert guidance made all the difference. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Python Developer",
    company: "CodeCraft Technologies",
    content: "From beginner to professional - Vednovaa's Python course covered everything. The project-based learning approach and placement support are exceptional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Data Analyst",
    company: "Analytics Pro",
    content: "The data analysis course equipped me with practical skills I use daily. The instructors' industry experience shows in every lesson. Worth every penny!",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-background/80 backdrop-blur-sm border-border/50 shadow-elegant">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <Quote className="h-8 w-8 text-primary mx-auto" />
                    
                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-lg text-foreground/90 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="space-y-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-elegant"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-elegant"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex 
                ? "bg-primary scale-125" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;