
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const EBookPreview = () => {
  const { ebookSlug } = useParams();

  const ebookData = {
    "ai-ml-python": {
      title: "AI/ML with Python",
      description: "Comprehensive guide to artificial intelligence and machine learning",
      pages: "450 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Introduction to Artificial Intelligence and Machine Learning</h1>
        
        <h2>What is Artificial Intelligence?</h2>
        <p>Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, speech recognition, decision-making, and language translation.</p>
        
        <p>The concept of AI has been around since the 1950s, but recent advances in computing power, data availability, and algorithm development have made AI more practical and widespread than ever before.</p>
        
        <h2>Understanding Machine Learning</h2>
        <p>Machine Learning (ML) is a subset of AI that focuses on the development of algorithms and statistical models that enable computers to improve their performance on a specific task through experience, without being explicitly programmed.</p>
        
        <p>There are three main types of machine learning:</p>
        <ul>
          <li><strong>Supervised Learning:</strong> Learning with labeled data to make predictions</li>
          <li><strong>Unsupervised Learning:</strong> Finding patterns in data without labels</li>
          <li><strong>Reinforcement Learning:</strong> Learning through interaction with an environment</li>
        </ul>
        
        <h2>Why Python for AI/ML?</h2>
        <p>Python has become the de facto standard for AI and ML development due to several key advantages:</p>
        
        <h3>1. Simplicity and Readability</h3>
        <p>Python's clean and intuitive syntax makes it easy to write and understand code, allowing developers to focus on solving problems rather than wrestling with complex syntax.</p>
        
        <h3>2. Rich Ecosystem of Libraries</h3>
        <p>Python offers a vast collection of libraries specifically designed for AI/ML:</p>
        <ul>
          <li><strong>NumPy:</strong> Fundamental package for scientific computing</li>
          <li><strong>Pandas:</strong> Data manipulation and analysis</li>
          <li><strong>Scikit-learn:</strong> Machine learning algorithms and tools</li>
          <li><strong>TensorFlow:</strong> Deep learning framework by Google</li>
          <li><strong>PyTorch:</strong> Deep learning framework by Facebook</li>
        </ul>
        
        <h3>3. Community Support</h3>
        <p>Python has a large and active community that contributes to its development and provides support through forums, tutorials, and documentation.</p>
        
        <h2>Setting Up Your Development Environment</h2>
        <p>Before we dive into AI/ML concepts, let's set up a proper development environment. You'll need:</p>
        
        <ol>
          <li>Python 3.7 or higher</li>
          <li>Jupyter Notebook or JupyterLab</li>
          <li>Essential libraries (NumPy, Pandas, Matplotlib, Scikit-learn)</li>
          <li>A code editor (VS Code, PyCharm, or similar)</li>
        </ol>
        
        <h2>Your First AI/ML Project</h2>
        <p>In this book, we'll start with simple examples and gradually build up to more complex projects. Our first project will be a basic linear regression model to predict house prices based on features like size, location, and number of bedrooms.</p>
        
        <p>This introductory chapter sets the foundation for your journey into AI and ML with Python. In the following chapters, we'll explore data preprocessing, feature engineering, model selection, and deployment strategies.</p>
        
        <blockquote>
          <p><em>"The best way to learn AI/ML is by doing. This book provides hands-on examples and practical exercises that will help you master these technologies."</em></p>
        </blockquote>
        
        <p>Ready to begin your AI/ML journey? Let's dive into Chapter 2: Python Fundamentals for Data Science...</p>
      `
    },
    "python-programming": {
      title: "Python Programming",
      description: "Complete Python programming handbook for beginners to advanced",
      pages: "320 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Getting Started with Python</h1>
        
        <h2>Welcome to Python Programming</h2>
        <p>Python is one of the most popular programming languages in the world, known for its simplicity, versatility, and powerful capabilities. Whether you're a complete beginner or an experienced programmer looking to add Python to your skillset, this book will guide you through every step of your journey.</p>
        
        <h2>Why Choose Python?</h2>
        <p>Python offers numerous advantages that make it an excellent choice for both beginners and professionals:</p>
        
        <h3>1. Easy to Learn and Use</h3>
        <p>Python's syntax is designed to be intuitive and closely resembles English, making it easier to learn than many other programming languages.</p>
        
        <h3>2. Versatile Applications</h3>
        <p>Python can be used for:</p>
        <ul>
          <li>Web development (Django, Flask)</li>
          <li>Data science and analytics</li>
          <li>Artificial intelligence and machine learning</li>
          <li>Desktop applications</li>
          <li>Game development</li>
          <li>Automation and scripting</li>
        </ul>
        
        <h3>3. Large Community and Resources</h3>
        <p>Python has a massive, supportive community that contributes to its extensive library ecosystem and provides help through forums, tutorials, and documentation.</p>
        
        <h2>Installing Python</h2>
        <p>Before we start coding, you need to install Python on your computer. Visit python.org and download the latest version of Python 3.x for your operating system.</p>
        
        <h2>Your First Python Program</h2>
        <p>Let's write your first Python program. Open your Python interpreter or a text editor and type:</p>
        
        <pre><code>print("Hello, World!")</code></pre>
        
        <p>This simple program demonstrates Python's readable syntax. The <code>print()</code> function displays text on the screen.</p>
        
        <h2>Python Syntax Basics</h2>
        
        <h3>Variables and Data Types</h3>
        <p>In Python, you don't need to declare variable types explicitly:</p>
        
        <pre><code>
name = "Alice"          # String
age = 25               # Integer
height = 5.6           # Float
is_student = True      # Boolean
        </code></pre>
        
        <h3>Comments</h3>
        <p>Use the hash symbol (#) to add comments to your code:</p>
        
        <pre><code># This is a comment
print("This line will execute")  # This is also a comment</code></pre>
        
        <h2>Interactive Python</h2>
        <p>Python provides an interactive interpreter where you can test code snippets immediately. This is perfect for learning and experimentation.</p>
        
        <p>Throughout this book, we'll build practical projects that demonstrate real-world applications of Python programming concepts. From simple calculators to web applications, you'll gain hands-on experience that will prepare you for your programming career.</p>
        
        <blockquote>
          <p><em>"The best way to learn programming is by writing programs. This book emphasizes practical learning through examples and exercises."</em></p>
        </blockquote>
        
        <p>Ready to dive deeper? In Chapter 2, we'll explore Python's data types and operators in detail...</p>
      `
    }
  };

  const ebook = ebookData[ebookSlug as keyof typeof ebookData];

  if (!ebook) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">E-Book Not Found</h1>
          <Link to="/ebooks">
            <Button>Back to E-Books</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* E-book Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{ebook.title}</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">{ebook.description}</p>
            <div className="flex justify-center space-x-6 text-primary-100">
              <span>{ebook.pages}</span>
              <span>•</span>
              <span>{ebook.format}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">Preview: {ebook.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  📖 This is a preview excerpt from the full e-book. The complete version contains detailed explanations, examples, and exercises.
                </p>
              </div>
              
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: ebook.preview }}
                />
              </article>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Want to read more?</h3>
                <p className="text-primary-700 mb-4">
                  This preview shows just a small portion of what's covered in the complete e-book. 
                  The full version includes detailed chapters, practical examples, exercises, and much more.
                </p>
                <Button className="bg-primary-600 hover:bg-primary-700">
                  Contact us for Full Access
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link to="/ebooks">
                  <Button variant="outline">← Back to All E-Books</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EBookPreview;
