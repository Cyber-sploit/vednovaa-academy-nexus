
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-blanka font-bold text-primary-400 mb-4">
              Vednovaa Academy
            </h2>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering students with cutting-edge education in technology, business, and innovation. 
              Join thousands of learners building their future with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors">Courses</Link></li>
              <li><Link to="/ebooks" className="text-gray-300 hover:text-primary-400 transition-colors">e-Books</Link></li>
              <li><Link to="/labs" className="text-gray-300 hover:text-primary-400 transition-colors">Labs</Link></li>
              <li><Link to="/podcast" className="text-gray-300 hover:text-primary-400 transition-colors">Podcast</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-primary-400 transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">8779171453</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">contact@vednovaa.com</span>
              </div>
              <p className="text-gray-300">
                Gorakhpur, Uttar Pradesh<br />
                273014
              </p>
              <p className="text-gray-300">
                www.vednovaa.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Vednovaa Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
