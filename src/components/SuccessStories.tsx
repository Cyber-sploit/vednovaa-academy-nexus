import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Briefcase } from "lucide-react";
import InteractiveCard from "./InteractiveCard";
import GradientText from "./GradientText";

const successStories = [
  {
    name: "Ankit Verma",
    before: "Final Year Student",
    after: "ML Engineer at Google",
    course: "AI/ML with Python",
    salaryIncrease: "₹18 LPA",
    story: "From college student to Google ML Engineer in 6 months",
    icon: TrendingUp,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    name: "Kavya Singh",
    before: "Fresh Graduate",
    after: "Cybersecurity Specialist",
    course: "Cyber Security",
    salaryIncrease: "₹12 LPA",
    story: "Landed dream job at top cybersecurity firm",
    icon: Award,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    name: "Rohit Gupta",
    before: "Career Changer",
    after: "Senior Data Analyst",
    course: "Data Analysis",
    salaryIncrease: "₹15 LPA",
    story: "Successfully transitioned from finance to tech",
    icon: Briefcase,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Student <GradientText>Success Stories</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from our alumni who landed their dream jobs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <InteractiveCard 
              key={index} 
              className="h-full group"
              hoverLift={true}
              glowEffect={true}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 ${story.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <story.icon className={`h-8 w-8 ${story.iconColor}`} />
                </div>

                {/* Transformation */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{story.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm text-muted-foreground">{story.before}</span>
                      <span className="text-primary">→</span>
                      <span className="text-sm font-semibold text-foreground">{story.after}</span>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {story.course}
                    </Badge>
                  </div>
                </div>

                {/* Salary */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{story.salaryIncrease}</div>
                  <p className="text-sm text-muted-foreground">Starting Package</p>
                </div>

                {/* Story */}
                <p className="text-sm text-muted-foreground text-center italic">
                  "{story.story}"
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;