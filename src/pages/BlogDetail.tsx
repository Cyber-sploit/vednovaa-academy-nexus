
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";

const BlogDetail = () => {
  const { blogSlug } = useParams();

  const blogData = {
    "data-scientist-skills-2024": {
      title: "10 Essential Skills Every Data Scientist Needs in 2024",
      author: "Dr. Priya Sharma",
      date: "December 15, 2024",
      category: "Career Advice",
      readTime: "8 min read",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
      content: `
        <p>The field of data science continues to evolve rapidly, and staying competitive requires mastering both foundational and emerging skills. Here are the 10 essential skills every data scientist should develop in 2024.</p>
        
        <h2>1. Advanced Python Programming</h2>
        <p>Python remains the backbone of data science. Beyond basic syntax, focus on advanced concepts like decorators, context managers, and asynchronous programming. Master libraries like Pandas, NumPy, and Scikit-learn.</p>
        
        <h2>2. Machine Learning Operations (MLOps)</h2>
        <p>MLOps has become crucial for deploying and maintaining machine learning models in production. Learn tools like Docker, Kubernetes, and cloud platforms like AWS SageMaker or Google Cloud AI Platform.</p>
        
        <h2>3. Deep Learning and Neural Networks</h2>
        <p>With the rise of generative AI, understanding deep learning architectures is essential. Focus on frameworks like TensorFlow and PyTorch, and explore transformer models and attention mechanisms.</p>
        
        <h2>4. Data Engineering Fundamentals</h2>
        <p>Modern data scientists need to understand data pipelines, ETL processes, and big data technologies like Apache Spark and Kafka. This knowledge helps in working with real-world, large-scale datasets.</p>
        
        <h2>5. Cloud Computing</h2>
        <p>Cloud platforms have become the standard for data science work. Gain proficiency in at least one major cloud provider (AWS, Google Cloud, or Azure) and their data science services.</p>
        
        <h2>6. Statistical Thinking and Experimental Design</h2>
        <p>Strong statistical foundations remain crucial. Focus on A/B testing, hypothesis testing, and causal inference. Understanding when and how to apply different statistical methods is key.</p>
        
        <h2>7. Data Visualization and Storytelling</h2>
        <p>The ability to communicate insights effectively through visualizations and narratives is invaluable. Master tools like Tableau, Power BI, or advanced Python visualization libraries.</p>
        
        <h2>8. Business Acumen</h2>
        <p>Understanding the business context of your work helps create more impactful solutions. Learn to translate technical findings into business value and ROI.</p>
        
        <h2>9. Natural Language Processing (NLP)</h2>
        <p>With the explosion of text data and large language models, NLP skills are increasingly valuable. Learn about transformers, BERT, GPT models, and their applications.</p>
        
        <h2>10. Ethics and Responsible AI</h2>
        <p>As AI becomes more prevalent, understanding ethics, bias detection, and responsible AI practices is crucial. Learn about fairness, transparency, and accountability in machine learning.</p>
        
        <h2>Conclusion</h2>
        <p>Developing these skills requires continuous learning and practice. Start with areas that align with your current role and gradually expand your expertise. Remember, the key is not just technical proficiency but the ability to apply these skills to solve real-world problems effectively.</p>
      `
    },
    "ai-indian-education": {
      title: "The Rise of AI in Indian Education: Opportunities and Challenges",
      author: "Prof. Rajesh Kumar",
      date: "December 12, 2024",
      category: "Industry Trends",
      readTime: "12 min read",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
      content: `
        <p>Artificial Intelligence is transforming education globally, and India is at the forefront of this revolution. This comprehensive analysis explores the current state, opportunities, and challenges of AI adoption in Indian educational institutions.</p>
        
        <h2>Current State of AI in Indian Education</h2>
        <p>The Indian education sector has been gradually adopting AI technologies, accelerated by the COVID-19 pandemic. From personalized learning platforms to automated assessment systems, AI is reshaping how students learn and teachers teach.</p>
        
        <h2>Key Opportunities</h2>
        
        <h3>Personalized Learning</h3>
        <p>AI enables customized learning experiences tailored to individual student needs, learning pace, and preferences. Adaptive learning platforms can adjust content difficulty and presentation style based on student performance.</p>
        
        <h3>Automated Assessment and Feedback</h3>
        <p>AI-powered tools can provide instant feedback on assignments, reducing teacher workload and enabling faster learning cycles. Natural language processing can evaluate written responses and provide detailed feedback.</p>
        
        <h3>Predictive Analytics</h3>
        <p>Educational institutions can use AI to predict student performance, identify at-risk students, and implement early intervention strategies to improve retention rates.</p>
        
        <h2>Challenges and Barriers</h2>
        
        <h3>Infrastructure Limitations</h3>
        <p>Many educational institutions, especially in rural areas, lack the necessary technological infrastructure to implement AI solutions effectively.</p>
        
        <h3>Teacher Training and Adoption</h3>
        <p>Successful AI implementation requires comprehensive teacher training programs and change management strategies to ensure smooth adoption.</p>
        
        <h3>Data Privacy and Security</h3>
        <p>Protecting student data and ensuring privacy compliance remains a significant challenge as AI systems require large amounts of personal and academic data.</p>
        
        <h2>Success Stories</h2>
        <p>Several Indian institutions have successfully implemented AI solutions. IIT Delhi's AI-powered course recommendation system and BYJU'S personalized learning platform are prime examples of successful AI integration.</p>
        
        <h2>Future Outlook</h2>
        <p>The future of AI in Indian education looks promising, with government initiatives like the National Education Policy 2020 emphasizing technology integration. However, success will depend on addressing current challenges and ensuring equitable access to AI-powered educational tools.</p>
        
        <h2>Recommendations</h2>
        <ul>
          <li>Invest in robust technological infrastructure</li>
          <li>Develop comprehensive teacher training programs</li>
          <li>Establish clear data privacy and security protocols</li>
          <li>Foster public-private partnerships for AI development</li>
          <li>Ensure equitable access across urban and rural areas</li>
        </ul>
        
        <p>The integration of AI in Indian education represents both an opportunity and a responsibility. By addressing current challenges and leveraging AI's potential, India can create a more inclusive, effective, and innovative educational ecosystem.</p>
      `
    }
  };

  const blog = blogData[blogSlug as keyof typeof blogData];

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blogs">
            <Button>Back to Blogs</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Blog Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              {blog.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{blog.title}</h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <img 
              src={blog.thumbnail} 
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg animate-fade-in-scale"
              style={{ animationDelay: '0.3s' }}
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none animate-fade-in">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/blogs">
              <Button variant="outline">← Back to All Blogs</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
