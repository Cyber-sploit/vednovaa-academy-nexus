
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";

const Courses = () => {
  const courses = [
    {
      title: "AI/ML with Python",
      description: "Master artificial intelligence and machine learning with hands-on Python programming",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
    },
    {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts with real-world projects",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    },
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    },
    {
      title: "Cyber Security",
      description: "Protect digital assets and learn ethical hacking techniques",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    },
    {
      title: "Business Analysis",
      description: "Bridge the gap between business needs and technical solutions",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600",
    },
    {
      title: "Build360",
      description: "Comprehensive full-stack development program",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600",
    },
    {
      title: "Finance",
      description: "Financial modeling, analysis, and investment strategies",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600",
    },
    {
      title: "Bioinformatics",
      description: "Apply computational techniques to biological data analysis",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive programs designed to equip you with industry-relevant skills and knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
