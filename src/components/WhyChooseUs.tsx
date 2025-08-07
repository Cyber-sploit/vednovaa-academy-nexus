import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  BookOpen, 
  Briefcase, 
  Clock, 
  Target,
  Lightbulb,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";
import InteractiveCard from "./InteractiveCard";
import GradientText from "./GradientText";
import SectionDivider from "./SectionDivider";

const advantages = [
  {
    title: "Industry Expert Instructors",
    description: "Learn from seasoned professionals with 10+ years of industry experience",
    icon: Users,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    stats: "10+ Years Experience"
  },
  {
    title: "100% Placement Assistance",
    description: "Comprehensive placement support with resume building and mock interviews",
    icon: Briefcase,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    stats: "95% Placement Rate"
  },
  {
    title: "Hands-On Learning Labs",
    description: "Real-world projects and practical experience with cutting-edge tools",
    icon: BookOpen,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    stats: "50+ Lab Sessions"
  },
  {
    title: "Industry-Recognized Certificates",
    description: "Earn certificates that are valued by top companies across India",
    icon: Award,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    stats: "Industry Validated"
  },
  {
    title: "Flexible Learning Schedule",
    description: "Live + recorded sessions that fit your college and personal schedule",
    icon: Clock,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-100",
    stats: "24/7 Access"
  },
  {
    title: "Personalized Mentorship",
    description: "One-on-one guidance from industry mentors throughout your journey",
    icon: Target,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-100",
    stats: "1:1 Mentoring"
  }
];

const uniqueFeatures = [
  "Live interactive sessions with Q&A",
  "Industry-standard project portfolio",
  "Mock interview preparation",
  "Resume building workshops",
  "Soft skills development",
  "Alumni network access",
  "Job referral program",
  "Lifetime course access"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Why Choose Vednovaa Academy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Your Success is <GradientText>Our Mission</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just teach technology – we transform careers. Discover what makes us 
            India's premier destination for tech education.
          </p>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <InteractiveCard 
              key={index} 
              className="h-full group"
              hoverLift={true}
              glowEffect={true}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Icon and Stats */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 ${advantage.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className={`h-7 w-7 ${advantage.iconColor}`} />
                  </div>
                  <Badge variant="outline" className="text-xs bg-background">
                    {advantage.stats}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>

        <SectionDivider variant="wave" className="my-12" />

        {/* Additional Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">
                <Shield className="h-4 w-4 mr-2" />
                Premium Features
              </Badge>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Everything You Need for <GradientText>Career Success</GradientText>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive approach ensures you're not just learning technology, 
                but building a complete professional profile that stands out in the job market.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {uniqueFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Stats Dashboard */}
          <div className="animate-fade-in-scale">
            <InteractiveCard className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-border/50">
              <div className="space-y-6">
                <div className="text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Our Track Record
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Students Trained</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Placement Rate</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Hiring Partners</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">₹15L</div>
                    <div className="text-sm text-muted-foreground">Avg. Package</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground italic">
                      "Join thousands of successful professionals who started their journey with us"
                    </p>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;