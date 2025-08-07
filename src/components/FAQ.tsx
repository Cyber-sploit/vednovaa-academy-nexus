import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import GradientText from "./GradientText";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "courses" | "placement" | "technical";
}

const faqData: FAQItem[] = [
  {
    question: "What makes Vednovaa Academy different from other training institutes?",
    answer: "We offer industry-aligned curriculum with hands-on labs, real-world projects, and comprehensive placement assistance. Our instructors are industry veterans with 10+ years of experience, and we maintain a 95% placement rate.",
    category: "general"
  },
  {
    question: "Are the courses suitable for beginners with no prior experience?",
    answer: "Absolutely! Our courses are designed to take you from beginner to industry-ready professional. We start with fundamentals and gradually progress to advanced topics with plenty of practice sessions.",
    category: "courses"
  },
  {
    question: "What kind of placement assistance do you provide?",
    answer: "We offer comprehensive placement support including resume building, portfolio development, mock interviews, soft skills training, and direct referrals to our 50+ hiring partners. Our dedicated placement team works with you until you land your desired job.",
    category: "placement"
  },
  {
    question: "Do you provide certificates upon course completion?",
    answer: "Yes, you'll receive industry-recognized certificates upon successful completion of the course. We also provide Letters of Recommendation (LOR) for outstanding performers.",
    category: "courses"
  },
  {
    question: "What is the duration and format of the courses?",
    answer: "Course duration varies from 30-120 hours depending on the program. We offer both live interactive sessions and recorded content for flexible learning. You get lifetime access to course materials.",
    category: "courses"
  },
  {
    question: "Do you offer support for working professionals?",
    answer: "Yes! Our flexible scheduling includes weekend batches and evening sessions specifically designed for working professionals. You can learn at your own pace with our hybrid learning model.",
    category: "general"
  },
  {
    question: "What technology stack do you cover in your courses?",
    answer: "We cover the latest and most in-demand technologies including Python, AI/ML frameworks (TensorFlow, PyTorch), data analysis tools (Pandas, NumPy), cybersecurity tools, cloud platforms, and more.",
    category: "technical"
  },
  {
    question: "Is there any prerequisite for joining the courses?",
    answer: "Basic computer literacy is sufficient for most courses. For advanced programs like AI/ML, basic programming knowledge is helpful but not mandatory as we cover fundamentals.",
    category: "courses"
  },
  {
    question: "What is your job guarantee policy?",
    answer: "While we maintain a 95% placement rate and provide comprehensive support, job placement depends on individual performance, market conditions, and active participation in our placement program.",
    category: "placement"
  },
  {
    question: "Do you offer EMI or installment payment options?",
    answer: "Yes, we offer flexible payment options including EMI plans to make quality education accessible. Contact our admissions team for detailed payment plans.",
    category: "general"
  }
];

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "general", label: "General", icon: HelpCircle },
  { id: "courses", label: "Courses", icon: HelpCircle },
  { id: "placement", label: "Placement", icon: HelpCircle },
  { id: "technical", label: "Technical", icon: HelpCircle },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filteredFAQs = activeCategory === "all" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, placement assistance, and more
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "transition-all duration-300",
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground shadow-elegant" 
                  : "hover:bg-accent"
              )}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card
              key={index}
              className={cn(
                "transition-all duration-300 hover:shadow-elegant animate-fade-in-up",
                openItems.has(index) && "shadow-soft"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                variant="ghost"
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 h-auto justify-between hover:bg-transparent"
              >
                <span className="text-foreground font-medium pr-4">
                  {faq.question}
                </span>
                {openItems.has(index) ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </Button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Card className="bg-primary/5 border-primary/20 p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you make the right decision for your career
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Our Team
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;