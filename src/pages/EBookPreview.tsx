
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
    },
    "data-analysis": {
      title: "Data Analysis",
      description: "Data analysis techniques and tools for modern businesses",
      pages: "280 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Introduction to Data Analysis</h1>
        
        <h2>What is Data Analysis?</h2>
        <p>Data analysis is the process of inspecting, cleaning, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making. In today's data-driven world, organizations rely heavily on data analysis to gain competitive advantages and make informed strategic decisions.</p>
        
        <h2>The Data Analysis Process</h2>
        <p>Effective data analysis follows a structured approach:</p>
        
        <h3>1. Data Collection</h3>
        <p>Gathering relevant data from various sources such as databases, APIs, surveys, or web scraping. The quality of your analysis depends heavily on the quality and completeness of your data.</p>
        
        <h3>2. Data Cleaning</h3>
        <p>Identifying and correcting errors, handling missing values, and removing duplicates. This step often takes 70-80% of an analyst's time but is crucial for accurate results.</p>
        
        <h3>3. Exploratory Data Analysis (EDA)</h3>
        <p>Understanding the data through statistical summaries and visualizations to identify patterns, trends, and anomalies.</p>
        
        <h3>4. Data Modeling</h3>
        <p>Applying statistical methods, machine learning algorithms, or other analytical techniques to extract insights and make predictions.</p>
        
        <h3>5. Data Visualization</h3>
        <p>Creating charts, graphs, and dashboards to communicate findings effectively to stakeholders.</p>
        
        <h2>Essential Tools for Data Analysis</h2>
        
        <h3>Programming Languages</h3>
        <ul>
          <li><strong>Python:</strong> Versatile language with powerful libraries like Pandas, NumPy, and Matplotlib</li>
          <li><strong>R:</strong> Specialized for statistical computing and graphics</li>
          <li><strong>SQL:</strong> Essential for database querying and data manipulation</li>
        </ul>
        
        <h3>Visualization Tools</h3>
        <ul>
          <li><strong>Tableau:</strong> User-friendly business intelligence platform</li>
          <li><strong>Power BI:</strong> Microsoft's data visualization tool</li>
          <li><strong>Matplotlib/Seaborn:</strong> Python libraries for creating charts and graphs</li>
        </ul>
        
        <h2>Types of Data Analysis</h2>
        
        <h3>Descriptive Analysis</h3>
        <p>Summarizes historical data to understand what has happened. Examples include sales reports, website traffic analytics, and customer behavior summaries.</p>
        
        <h3>Diagnostic Analysis</h3>
        <p>Investigates why something happened by identifying correlations and causal relationships in the data.</p>
        
        <h3>Predictive Analysis</h3>
        <p>Uses historical data to forecast future trends and outcomes using statistical models and machine learning algorithms.</p>
        
        <h3>Prescriptive Analysis</h3>
        <p>Recommends actions based on the insights gained from other types of analysis.</p>
        
        <h2>Real-World Applications</h2>
        <p>Data analysis is applied across various industries:</p>
        <ul>
          <li><strong>Healthcare:</strong> Patient outcome prediction and drug discovery</li>
          <li><strong>Finance:</strong> Risk assessment and fraud detection</li>
          <li><strong>Marketing:</strong> Customer segmentation and campaign optimization</li>
          <li><strong>E-commerce:</strong> Recommendation systems and inventory management</li>
        </ul>
        
        <blockquote>
          <p><em>"Data analysis is not just about numbers; it's about transforming raw data into actionable insights that drive business value."</em></p>
        </blockquote>
        
        <p>In the next chapter, we'll dive into setting up your data analysis environment and working with your first dataset...</p>
      `
    },
    "cyber-security": {
      title: "Cyber Security",
      description: "Essential cybersecurity practices and ethical hacking guide",
      pages: "380 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Introduction to Cybersecurity</h1>
        
        <h2>Understanding Cybersecurity</h2>
        <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.</p>
        
        <h2>The Current Threat Landscape</h2>
        <p>In today's interconnected world, cyber threats are more sophisticated and frequent than ever before. Organizations face an average of over 1,000 cyberattacks per week, making cybersecurity a critical business priority.</p>
        
        <h3>Common Types of Cyber Threats</h3>
        <ul>
          <li><strong>Malware:</strong> Software designed to damage or disable computers</li>
          <li><strong>Phishing:</strong> Fraudulent attempts to obtain sensitive information</li>
          <li><strong>Ransomware:</strong> Malicious software that encrypts files and demands payment</li>
          <li><strong>Social Engineering:</strong> Manipulating people to divulge confidential information</li>
          <li><strong>DDoS Attacks:</strong> Overwhelming systems with traffic to make them unavailable</li>
        </ul>
        
        <h2>Core Cybersecurity Principles</h2>
        
        <h3>The CIA Triad</h3>
        <p>The foundation of cybersecurity is built on three core principles:</p>
        
        <h4>Confidentiality</h4>
        <p>Ensuring that information is accessible only to those authorized to access it. This involves encryption, access controls, and authentication mechanisms.</p>
        
        <h4>Integrity</h4>
        <p>Maintaining the accuracy and completeness of data throughout its lifecycle. This includes protecting against unauthorized modifications.</p>
        
        <h4>Availability</h4>
        <p>Ensuring that information and resources are available to authorized users when needed. This involves backup systems, redundancy, and disaster recovery planning.</p>
        
        <h2>Defense in Depth Strategy</h2>
        <p>Effective cybersecurity employs multiple layers of protection:</p>
        
        <ol>
          <li><strong>Physical Security:</strong> Protecting hardware and facilities</li>
          <li><strong>Network Security:</strong> Firewalls, intrusion detection systems</li>
          <li><strong>Endpoint Security:</strong> Antivirus software, device management</li>
          <li><strong>Application Security:</strong> Secure coding practices, vulnerability testing</li>
          <li><strong>Data Security:</strong> Encryption, data loss prevention</li>
          <li><strong>Identity and Access Management:</strong> Authentication, authorization</li>
          <li><strong>Security Awareness:</strong> Employee training and education</li>
        </ol>
        
        <h2>Essential Security Tools</h2>
        
        <h3>Network Security Tools</h3>
        <ul>
          <li><strong>Nmap:</strong> Network discovery and security auditing</li>
          <li><strong>Wireshark:</strong> Network protocol analyzer</li>
          <li><strong>Metasploit:</strong> Penetration testing framework</li>
        </ul>
        
        <h3>Vulnerability Assessment Tools</h3>
        <ul>
          <li><strong>Nessus:</strong> Comprehensive vulnerability scanner</li>
          <li><strong>OpenVAS:</strong> Open-source vulnerability assessment tool</li>
          <li><strong>Burp Suite:</strong> Web application security testing</li>
        </ul>
        
        <h2>Ethical Hacking Fundamentals</h2>
        <p>Ethical hacking, also known as penetration testing or white-hat hacking, involves authorized attempts to gain unauthorized access to systems to identify vulnerabilities before malicious hackers can exploit them.</p>
        
        <h3>Phases of Ethical Hacking</h3>
        <ol>
          <li><strong>Reconnaissance:</strong> Gathering information about the target</li>
          <li><strong>Scanning:</strong> Identifying live systems and open ports</li>
          <li><strong>Enumeration:</strong> Extracting detailed information about identified services</li>
          <li><strong>Vulnerability Assessment:</strong> Identifying potential security weaknesses</li>
          <li><strong>Exploitation:</strong> Attempting to exploit identified vulnerabilities</li>
          <li><strong>Reporting:</strong> Documenting findings and recommendations</li>
        </ol>
        
        <h2>Career Paths in Cybersecurity</h2>
        <p>The cybersecurity field offers diverse career opportunities:</p>
        <ul>
          <li><strong>Security Analyst:</strong> Monitor and analyze security events</li>
          <li><strong>Penetration Tester:</strong> Conduct authorized security assessments</li>
          <li><strong>Security Architect:</strong> Design secure systems and networks</li>
          <li><strong>Incident Response Specialist:</strong> Handle security breaches and incidents</li>
          <li><strong>Compliance Officer:</strong> Ensure adherence to security regulations</li>
        </ul>
        
        <blockquote>
          <p><em>"Cybersecurity is not just about technology; it's about protecting people, data, and the digital way of life."</em></p>
        </blockquote>
        
        <p>In Chapter 2, we'll explore the fundamentals of network security and common attack vectors...</p>
      `
    },
    "business-analysis": {
      title: "Business Analysis",
      description: "Business analysis methodologies and best practices",
      pages: "240 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Introduction to Business Analysis</h1>
        
        <h2>What is Business Analysis?</h2>
        <p>Business Analysis is the practice of enabling change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders. Business analysts work as a bridge between business stakeholders and solution providers, facilitating the successful implementation of business improvements.</p>
        
        <h2>The Role of a Business Analyst</h2>
        <p>Business Analysts serve as crucial intermediaries who:</p>
        <ul>
          <li>Understand business problems and opportunities</li>
          <li>Analyze current business processes and systems</li>
          <li>Identify requirements for business solutions</li>
          <li>Facilitate communication between stakeholders</li>
          <li>Ensure solutions meet business needs</li>
          <li>Support change management initiatives</li>
        </ul>
        
        <h2>Core Business Analysis Activities</h2>
        
        <h3>1. Requirements Elicitation</h3>
        <p>The process of discovering, reviewing, documenting, and understanding stakeholder needs. This involves:</p>
        <ul>
          <li>Conducting interviews and workshops</li>
          <li>Observing business processes</li>
          <li>Analyzing existing documentation</li>
          <li>Facilitating brainstorming sessions</li>
        </ul>
        
        <h3>2. Requirements Analysis</h3>
        <p>Examining requirements to ensure they are complete, clear, and feasible. This includes:</p>
        <ul>
          <li>Prioritizing requirements</li>
          <li>Identifying conflicts and dependencies</li>
          <li>Assessing feasibility and impact</li>
          <li>Modeling business processes</li>
        </ul>
        
        <h3>3. Solution Assessment</h3>
        <p>Evaluating proposed solutions to determine their effectiveness in meeting business needs:</p>
        <ul>
          <li>Cost-benefit analysis</li>
          <li>Risk assessment</li>
          <li>Impact analysis</li>
          <li>Performance measurement</li>
        </ul>
        
        <h2>Business Analysis Frameworks</h2>
        
        <h3>BABOK (Business Analysis Body of Knowledge)</h3>
        <p>The BABOK Guide is the globally recognized standard for business analysis practices. It defines six knowledge areas:</p>
        <ol>
          <li><strong>Business Analysis Planning and Monitoring</strong></li>
          <li><strong>Elicitation and Collaboration</strong></li>
          <li><strong>Requirements Life Cycle Management</strong></li>
          <li><strong>Strategy Analysis</strong></li>
          <li><strong>Requirements Analysis and Design Definition</strong></li>
          <li><strong>Solution Evaluation</strong></li>
        </ol>
        
        <h3>Agile Business Analysis</h3>
        <p>In Agile environments, business analysts adapt their approach to support iterative development:</p>
        <ul>
          <li>Just-in-time requirements gathering</li>
          <li>Continuous stakeholder collaboration</li>
          <li>Adaptive planning and documentation</li>
          <li>User story development and refinement</li>
        </ul>
        
        <h2>Essential Skills for Business Analysts</h2>
        
        <h3>Analytical Skills</h3>
        <ul>
          <li>Critical thinking and problem-solving</li>
          <li>Data analysis and interpretation</li>
          <li>Process modeling and improvement</li>
          <li>Root cause analysis</li>
        </ul>
        
        <h3>Communication Skills</h3>
        <ul>
          <li>Active listening</li>
          <li>Written and verbal communication</li>
          <li>Presentation and facilitation</li>
          <li>Stakeholder management</li>
        </ul>
        
        <h3>Technical Skills</h3>
        <ul>
          <li>Requirements management tools</li>
          <li>Process modeling software</li>
          <li>Data analysis tools</li>
          <li>Basic understanding of technology solutions</li>
        </ul>
        
        <h2>Common Business Analysis Techniques</h2>
        
        <h3>Process Mapping</h3>
        <p>Visual representation of business processes to understand current state and identify improvement opportunities.</p>
        
        <h3>SWOT Analysis</h3>
        <p>Evaluating Strengths, Weaknesses, Opportunities, and Threats to inform strategic decision-making.</p>
        
        <h3>Gap Analysis</h3>
        <p>Comparing current state with desired future state to identify gaps and improvement opportunities.</p>
        
        <h3>Stakeholder Analysis</h3>
        <p>Identifying and analyzing stakeholders to understand their needs, influence, and impact on the project.</p>
        
        <h2>Business Analysis in Different Industries</h2>
        <p>Business analysis principles apply across various sectors:</p>
        <ul>
          <li><strong>Healthcare:</strong> Process improvement and compliance</li>
          <li><strong>Financial Services:</strong> Risk management and regulatory compliance</li>
          <li><strong>Technology:</strong> Product development and system integration</li>
          <li><strong>Manufacturing:</strong> Supply chain optimization and quality improvement</li>
        </ul>
        
        <h2>Career Development</h2>
        <p>Business analysts can advance their careers through:</p>
        <ul>
          <li>Professional certifications (CBAP, PMI-PBA)</li>
          <li>Continuous learning and skill development</li>
          <li>Industry specialization</li>
          <li>Leadership and management roles</li>
        </ul>
        
        <blockquote>
          <p><em>"Successful business analysis is about understanding not just what stakeholders say they want, but what they actually need to achieve their goals."</em></p>
        </blockquote>
        
        <p>In Chapter 2, we'll explore requirements elicitation techniques and stakeholder engagement strategies...</p>
      `
    },
    "build360": {
      title: "Build360",
      description: "Full-stack development guide from frontend to backend",
      pages: "520 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Introduction to Full-Stack Development</h1>
        
        <h2>What is Full-Stack Development?</h2>
        <p>Full-stack development refers to the development of both front-end (client side) and back-end (server side) portions of a web application. Full-stack developers are versatile professionals who can work with databases, servers, systems engineering, and clients, handling projects that involve building user-facing websites and applications.</p>
        
        <h2>The Full-Stack Developer's Toolkit</h2>
        <p>Modern full-stack development encompasses a wide range of technologies and tools. Let's explore the complete development stack:</p>
        
        <h3>Frontend Technologies</h3>
        <h4>Core Languages</h4>
        <ul>
          <li><strong>HTML5:</strong> Structure and content of web pages</li>
          <li><strong>CSS3:</strong> Styling and layout of web pages</li>
          <li><strong>JavaScript:</strong> Interactive functionality and user experience</li>
        </ul>
        
        <h4>Frontend Frameworks and Libraries</h4>
        <ul>
          <li><strong>React:</strong> Component-based UI library by Facebook</li>
          <li><strong>Vue.js:</strong> Progressive JavaScript framework</li>
          <li><strong>Angular:</strong> Comprehensive framework by Google</li>
          <li><strong>Svelte:</strong> Compile-time optimized framework</li>
        </ul>
        
        <h4>CSS Frameworks</h4>
        <ul>
          <li><strong>Bootstrap:</strong> Responsive design framework</li>
          <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
          <li><strong>Material-UI:</strong> React components implementing Google's Material Design</li>
        </ul>
        
        <h3>Backend Technologies</h3>
        <h4>Server-Side Languages</h4>
        <ul>
          <li><strong>Node.js:</strong> JavaScript runtime for server-side development</li>
          <li><strong>Python:</strong> With frameworks like Django and Flask</li>
          <li><strong>Java:</strong> With Spring Boot framework</li>
          <li><strong>C#:</strong> With ASP.NET Core framework</li>
          <li><strong>PHP:</strong> With Laravel or Symfony frameworks</li>
        </ul>
        
        <h4>Databases</h4>
        <ul>
          <li><strong>Relational:</strong> MySQL, PostgreSQL, SQL Server</li>
          <li><strong>NoSQL:</strong> MongoDB, CouchDB, Cassandra</li>
          <li><strong>In-Memory:</strong> Redis, Memcached</li>
        </ul>
        
        <h3>DevOps and Deployment</h3>
        <ul>
          <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
          <li><strong>Cloud Platforms:</strong> AWS, Azure, Google Cloud</li>
          <li><strong>Containerization:</strong> Docker, Kubernetes</li>
          <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI</li>
        </ul>
        
        <h2>Development Methodologies</h2>
        
        <h3>Agile Development</h3>
        <p>Most full-stack projects follow Agile methodologies, emphasizing:</p>
        <ul>
          <li>Iterative development cycles</li>
          <li>Continuous feedback and improvement</li>
          <li>Cross-functional team collaboration</li>
          <li>Adaptive planning and flexible responses to change</li>
        </ul>
        
        <h3>Test-Driven Development (TDD)</h3>
        <p>Writing tests before implementing functionality to ensure code quality and reliability:</p>
        <ol>
          <li>Write a failing test</li>
          <li>Write minimal code to pass the test</li>
          <li>Refactor and improve the code</li>
        </ol>
        
        <h2>API Development and Integration</h2>
        
        <h3>RESTful APIs</h3>
        <p>Representational State Transfer (REST) is the most common architectural style for web APIs:</p>
        <ul>
          <li><strong>GET:</strong> Retrieve data</li>
          <li><strong>POST:</strong> Create new resources</li>
          <li><strong>PUT:</strong> Update existing resources</li>
          <li><strong>DELETE:</strong> Remove resources</li>
        </ul>
        
        <h3>GraphQL</h3>
        <p>A query language and runtime for APIs that allows clients to request exactly the data they need.</p>
        
        <h3>API Authentication and Security</h3>
        <ul>
          <li><strong>JWT (JSON Web Tokens):</strong> Stateless authentication</li>
          <li><strong>OAuth 2.0:</strong> Authorization framework</li>
          <li><strong>API Keys:</strong> Simple authentication method</li>
        </ul>
        
        <h2>Project Structure and Architecture</h2>
        
        <h3>MVC (Model-View-Controller)</h3>
        <p>A design pattern that separates application logic into three components:</p>
        <ul>
          <li><strong>Model:</strong> Data and business logic</li>
          <li><strong>View:</strong> User interface and presentation</li>
          <li><strong>Controller:</strong> Input handling and flow control</li>
        </ul>
        
        <h3>Microservices Architecture</h3>
        <p>Breaking down applications into smaller, independent services that communicate through APIs.</p>
        
        <h2>Development Tools and Environment</h2>
        
        <h3>Code Editors and IDEs</h3>
        <ul>
          <li><strong>Visual Studio Code:</strong> Popular, extensible editor</li>
          <li><strong>WebStorm:</strong> Full-featured IDE for web development</li>
          <li><strong>Sublime Text:</strong> Fast, lightweight editor</li>
        </ul>
        
        <h3>Package Managers</h3>
        <ul>
          <li><strong>npm:</strong> Node.js package manager</li>
          <li><strong>yarn:</strong> Alternative to npm with improved performance</li>
          <li><strong>pip:</strong> Python package manager</li>
        </ul>
        
        <h2>Career Path and Skills Development</h2>
        <p>Full-stack developers are in high demand across industries. Career progression typically includes:</p>
        <ol>
          <li><strong>Junior Full-Stack Developer:</strong> Learning fundamentals</li>
          <li><strong>Mid-Level Developer:</strong> Building complex applications</li>
          <li><strong>Senior Developer:</strong> Leading projects and mentoring</li>
          <li><strong>Technical Lead/Architect:</strong> Designing system architecture</li>
          <li><strong>Engineering Manager:</strong> Leading development teams</li>
        </ol>
        
        <blockquote>
          <p><em>"The best full-stack developers are not just technically proficient; they understand the business context and user needs behind every line of code they write."</em></p>
        </blockquote>
        
        <p>Ready to start building? In Chapter 2, we'll set up our development environment and create our first full-stack application...</p>
      `
    },
    "finance": {
      title: "Finance",
      description: "Financial modeling and investment analysis handbook",
      pages: "300 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Introduction to Financial Analysis and Modeling</h1>
        
        <h2>Understanding Financial Analysis</h2>
        <p>Financial analysis is the process of evaluating businesses, projects, budgets, and other finance-related transactions to determine their performance and suitability. It is used to assess the viability, stability, and profitability of a business, sub-business, or project.</p>
        
        <h2>Types of Financial Analysis</h2>
        
        <h3>1. Fundamental Analysis</h3>
        <p>Evaluating a company's intrinsic value by examining related economic, financial, and other qualitative and quantitative factors:</p>
        <ul>
          <li>Financial statement analysis</li>
          <li>Industry and economic analysis</li>
          <li>Company management evaluation</li>
          <li>Competitive positioning assessment</li>
        </ul>
        
        <h3>2. Technical Analysis</h3>
        <p>Analyzing statistical trends from trading activity, such as price movement and volume:</p>
        <ul>
          <li>Chart patterns and indicators</li>
          <li>Moving averages and oscillators</li>
          <li>Support and resistance levels</li>
          <li>Volume analysis</li>
        </ul>
        
        <h3>3. Quantitative Analysis</h3>
        <p>Using mathematical and statistical models to analyze financial markets and securities:</p>
        <ul>
          <li>Risk modeling</li>
          <li>Portfolio optimization</li>
          <li>Derivative pricing</li>
          <li>Algorithmic trading strategies</li>
        </ul>
        
        <h2>Key Financial Statements</h2>
        
        <h3>Income Statement (Profit & Loss)</h3>
        <p>Shows a company's revenues, expenses, and profits over a specific period:</p>
        <ul>
          <li><strong>Revenue:</strong> Total income from sales or services</li>
          <li><strong>Cost of Goods Sold (COGS):</strong> Direct costs of producing goods/services</li>
          <li><strong>Gross Profit:</strong> Revenue minus COGS</li>
          <li><strong>Operating Expenses:</strong> Costs of running the business</li>
          <li><strong>Net Income:</strong> Final profit after all expenses and taxes</li>
        </ul>
        
        <h3>Balance Sheet</h3>
        <p>Snapshot of a company's financial position at a specific point in time:</p>
        <ul>
          <li><strong>Assets:</strong> What the company owns</li>
          <li><strong>Liabilities:</strong> What the company owes</li>
          <li><strong>Equity:</strong> Owner's stake in the company</li>
          <li><strong>Fundamental Equation:</strong> Assets = Liabilities + Equity</li>
        </ul>
        
        <h3>Cash Flow Statement</h3>
        <p>Tracks cash movements in and out of the business:</p>
        <ul>
          <li><strong>Operating Activities:</strong> Cash from core business operations</li>
          <li><strong>Investing Activities:</strong> Cash from buying/selling assets</li>
          <li><strong>Financing Activities:</strong> Cash from debt, equity, and dividends</li>
        </ul>
        
        <h2>Financial Ratios and Metrics</h2>
        
        <h3>Profitability Ratios</h3>
        <ul>
          <li><strong>Gross Profit Margin:</strong> Gross Profit / Revenue</li>
          <li><strong>Net Profit Margin:</strong> Net Income / Revenue</li>
          <li><strong>Return on Assets (ROA):</strong> Net Income / Total Assets</li>
          <li><strong>Return on Equity (ROE):</strong> Net Income / Shareholder Equity</li>
        </ul>
        
        <h3>Liquidity Ratios</h3>
        <ul>
          <li><strong>Current Ratio:</strong> Current Assets / Current Liabilities</li>
          <li><strong>Quick Ratio:</strong> (Current Assets - Inventory) / Current Liabilities</li>
          <li><strong>Cash Ratio:</strong> Cash / Current Liabilities</li>
        </ul>
        
        <h3>Leverage Ratios</h3>
        <ul>
          <li><strong>Debt-to-Equity:</strong> Total Debt / Total Equity</li>
          <li><strong>Debt-to-Assets:</strong> Total Debt / Total Assets</li>
          <li><strong>Interest Coverage:</strong> EBIT / Interest Expenses</li>
        </ul>
        
        <h2>Valuation Methods</h2>
        
        <h3>Discounted Cash Flow (DCF)</h3>
        <p>Values a company based on projected future cash flows discounted to present value:</p>
        <ol>
          <li>Project future cash flows</li>
          <li>Determine appropriate discount rate</li>
          <li>Calculate present value of cash flows</li>
          <li>Sum all present values for total valuation</li>
        </ol>
        
        <h3>Comparable Company Analysis</h3>
        <p>Values a company by comparing it to similar publicly traded companies using multiples like:</p>
        <ul>
          <li>Price-to-Earnings (P/E) ratio</li>
          <li>Enterprise Value-to-EBITDA (EV/EBITDA)</li>
          <li>Price-to-Book (P/B) ratio</li>
          <li>Price-to-Sales (P/S) ratio</li>
        </ul>
        
        <h3>Precedent Transaction Analysis</h3>
        <p>Values a company based on recent transactions of similar companies in the market.</p>
        
        <h2>Financial Modeling Fundamentals</h2>
        
        <h3>Building a Financial Model</h3>
        <p>A financial model is a quantitative representation of a company's operations, typically built in Excel:</p>
        <ol>
          <li><strong>Historical Analysis:</strong> Analyze past performance</li>
          <li><strong>Assumptions:</strong> Set key drivers and growth rates</li>
          <li><strong>Revenue Projections:</strong> Forecast future revenues</li>
          <li><strong>Cost Structure:</strong> Model operating expenses</li>
          <li><strong>Working Capital:</strong> Project balance sheet items</li>
          <li><strong>Capital Expenditures:</strong> Plan for investments</li>
          <li><strong>Financing:</strong> Model debt and equity</li>
        </ol>
        
        <h3>Model Types</h3>
        <ul>
          <li><strong>Three-Statement Model:</strong> Links income statement, balance sheet, and cash flow</li>
          <li><strong>DCF Model:</strong> Focused on valuation through discounted cash flows</li>
          <li><strong>LBO Model:</strong> Leveraged buyout analysis</li>
          <li><strong>M&A Model:</strong> Merger and acquisition impact analysis</li>
        </ul>
        
        <h2>Investment Analysis</h2>
        
        <h3>Risk and Return</h3>
        <p>The fundamental principle that higher returns typically come with higher risk:</p>
        <ul>
          <li><strong>Systematic Risk:</strong> Market-wide risks that cannot be diversified</li>
          <li><strong>Unsystematic Risk:</strong> Company-specific risks that can be diversified</li>
          <li><strong>Risk-Return Tradeoff:</strong> Balancing potential returns with acceptable risk levels</li>
        </ul>
        
        <h3>Portfolio Theory</h3>
        <p>Modern Portfolio Theory (MPT) suggests that investors can construct portfolios to maximize expected return for a given level of risk:</p>
        <ul>
          <li>Diversification reduces risk</li>
          <li>Efficient frontier optimization</li>
          <li>Asset allocation strategies</li>
        </ul>
        
        <blockquote>
          <p><em>"In finance, the only constant is change. Successful analysts combine rigorous quantitative analysis with qualitative judgment to navigate uncertainty."</em></p>
        </blockquote>
        
        <p>Ready to dive deeper? In Chapter 2, we'll explore advanced financial statement analysis techniques and ratio interpretation...</p>
      `
    },
    "bioinformatics": {
      title: "Bioinformatics",
      description: "Computational biology and bioinformatics essentials",
      pages: "290 pages",
      format: "PDF",
      preview: `
        <h1>Chapter 1: Introduction to Bioinformatics</h1>
        
        <h2>What is Bioinformatics?</h2>
        <p>Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data. It combines computer science, statistics, mathematics, and engineering to analyze and interpret biological information, particularly at the molecular level.</p>
        
        <h2>The Intersection of Biology and Computing</h2>
        <p>The exponential growth of biological data, particularly from genomic sequencing technologies, has created an urgent need for computational approaches to:</p>
        <ul>
          <li>Store and organize vast amounts of biological data</li>
          <li>Analyze complex patterns in genetic sequences</li>
          <li>Predict protein structures and functions</li>
          <li>Understand evolutionary relationships</li>
          <li>Discover new drugs and treatments</li>
        </ul>
        
        <h2>Core Areas of Bioinformatics</h2>
        
        <h3>1. Sequence Analysis</h3>
        <p>The study of DNA, RNA, and protein sequences to understand their structure, function, and evolution:</p>
        <ul>
          <li><strong>Sequence Alignment:</strong> Comparing sequences to identify similarities</li>
          <li><strong>Gene Prediction:</strong> Identifying coding regions in genomic sequences</li>
          <li><strong>Phylogenetic Analysis:</strong> Studying evolutionary relationships</li>
          <li><strong>Motif Discovery:</strong> Finding conserved patterns in sequences</li>
        </ul>
        
        <h3>2. Structural Bioinformatics</h3>
        <p>Analyzing and predicting the three-dimensional structures of biological macromolecules:</p>
        <ul>
          <li>Protein structure prediction</li>
          <li>Molecular docking and drug design</li>
          <li>Structure-function relationships</li>
          <li>Molecular dynamics simulations</li>
        </ul>
        
        <h3>3. Genomics and Transcriptomics</h3>
        <p>Large-scale analysis of genomes and gene expression:</p>
        <ul>
          <li>Genome assembly and annotation</li>
          <li>Comparative genomics</li>
          <li>RNA-seq data analysis</li>
          <li>Single-cell genomics</li>
        </ul>
        
        <h3>4. Systems Biology</h3>
        <p>Understanding biological systems as a whole through integration of multiple data types:</p>
        <ul>
          <li>Gene regulatory networks</li>
          <li>Metabolic pathway analysis</li>
          <li>Protein-protein interaction networks</li>
          <li>Mathematical modeling of biological processes</li>
        </ul>
        
        <h2>Essential Databases and Resources</h2>
        
        <h3>Sequence Databases</h3>
        <ul>
          <li><strong>NCBI GenBank:</strong> Comprehensive genetic sequence database</li>
          <li><strong>EMBL-EBI:</strong> European molecular biology database</li>
          <li><strong>DDBJ:</strong> DNA Data Bank of Japan</li>
          <li><strong>UniProt:</strong> Protein sequence and functional information</li>
        </ul>
        
        <h3>Structure Databases</h3>
        <ul>
          <li><strong>Protein Data Bank (PDB):</strong> 3D structures of proteins and nucleic acids</li>
          <li><strong>SCOP:</strong> Structural classification of proteins</li>
          <li><strong>CATH:</strong> Protein structure classification</li>
        </ul>
        
        <h3>Functional Databases</h3>
        <ul>
          <li><strong>Gene Ontology (GO):</strong> Standardized gene function annotations</li>
          <li><strong>KEGG:</strong> Pathway and genome databases</li>
          <li><strong>Reactome:</strong> Biological pathway database</li>
        </ul>
        
        <h2>Bioinformatics Tools and Software</h2>
        
        <h3>Sequence Analysis Tools</h3>
        <ul>
          <li><strong>BLAST:</strong> Basic Local Alignment Search Tool for sequence similarity</li>
          <li><strong>ClustalW/ClustalX:</strong> Multiple sequence alignment</li>
          <li><strong>MUSCLE:</strong> Fast multiple sequence alignment</li>
          <li><strong>HMMER:</strong> Hidden Markov model-based sequence analysis</li>
        </ul>
        
        <h3>Programming Languages</h3>
        <ul>
          <li><strong>Python:</strong> Popular for bioinformatics with libraries like BioPython</li>
          <li><strong>R:</strong> Statistical computing and bioinformatics packages (Bioconductor)</li>
          <li><strong>Perl:</strong> Text processing and sequence manipulation</li>
          <li><strong>Java:</strong> Large-scale bioinformatics applications</li>
        </ul>
        
        <h3>Specialized Software</h3>
        <ul>
          <li><strong>Galaxy:</strong> Web-based bioinformatics workflow platform</li>
          <li><strong>Geneious:</strong> Molecular biology and sequence analysis suite</li>
          <li><strong>ImageJ:</strong> Image processing for biological research</li>
          <li><strong>Cytoscape:</strong> Network visualization and analysis</li>
        </ul>
        
        <h2>Next-Generation Sequencing (NGS)</h2>
        
        <h3>NGS Technologies</h3>
        <p>Revolutionary sequencing technologies that can sequence millions of DNA fragments simultaneously:</p>
        <ul>
          <li><strong>Illumina:</strong> Short-read sequencing technology</li>
          <li><strong>Oxford Nanopore:</strong> Long-read, real-time sequencing</li>
          <li><strong>PacBio:</strong> Single-molecule real-time sequencing</li>
        </ul>
        
        <h3>NGS Data Analysis Pipeline</h3>
        <ol>
          <li><strong>Quality Control:</strong> Assess raw sequencing data quality</li>
          <li><strong>Preprocessing:</strong> Trim adapters and filter low-quality reads</li>
          <li><strong>Alignment:</strong> Map reads to reference genome</li>
          <li><strong>Variant Calling:</strong> Identify genetic variations</li>
          <li><strong>Annotation:</strong> Add functional information to variants</li>
          <li><strong>Interpretation:</strong> Analyze biological significance</li>
        </ol>
        
        <h2>Machine Learning in Bioinformatics</h2>
        
        <h3>Applications</h3>
        <ul>
          <li><strong>Gene Expression Analysis:</strong> Clustering and classification</li>
          <li><strong>Protein Structure Prediction:</strong> Deep learning models like AlphaFold</li>
          <li><strong>Drug Discovery:</strong> Molecular property prediction</li>
          <li><strong>Genome Annotation:</strong> Automated feature prediction</li>
        </ul>
        
        <h3>Common Algorithms</h3>
        <ul>
          <li><strong>Support Vector Machines (SVM):</strong> Classification tasks</li>
          <li><strong>Random Forests:</strong> Feature selection and prediction</li>
          <li><strong>Neural Networks:</strong> Complex pattern recognition</li>
          <li><strong>Hidden Markov Models:</strong> Sequence analysis</li>
        </ul>
        
        <h2>Personalized Medicine and Precision Healthcare</h2>
        <p>Bioinformatics plays a crucial role in the era of personalized medicine:</p>
        <ul>
          <li>Pharmacogenomics: predicting drug responses</li>
          <li>Cancer genomics: identifying therapeutic targets</li>
          <li>Rare disease diagnosis through exome/genome sequencing</li>
          <li>Microbiome analysis for health insights</li>
        </ul>
        
        <h2>Career Opportunities</h2>
        <p>Bioinformatics offers diverse career paths in:</p>
        <ul>
          <li><strong>Academia:</strong> Research and teaching positions</li>
          <li><strong>Pharmaceutical Industry:</strong> Drug discovery and development</li>
          <li><strong>Biotechnology Companies:</strong> Product development and analysis</li>
          <li><strong>Healthcare:</strong> Clinical genomics and diagnostics</li>
          <li><strong>Government:</strong> Public health and regulatory agencies</li>
        </ul>
        
        <h2>Ethical Considerations</h2>
        <p>Working with biological data raises important ethical questions:</p>
        <ul>
          <li>Data privacy and security</li>
          <li>Informed consent for genetic research</li>
          <li>Equitable access to genomic technologies</li>
          <li>Potential for genetic discrimination</li>
        </ul>
        
        <blockquote>
          <p><em>"Bioinformatics is not just about analyzing data; it's about translating biological complexity into computational insights that can improve human health and our understanding of life itself."</em></p>
        </blockquote>
        
        <p>Ready to explore the molecular world through computational lens? In Chapter 2, we'll dive into sequence analysis fundamentals and practice with real biological data...</p>
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
