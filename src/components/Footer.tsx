import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t transition-all duration-500 ${
      isDark 
        ? 'bg-slate-900 text-white border-slate-700' 
        : 'bg-slate-800 text-white border-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fadeInUp">
            <h3 className="text-xl font-bold mb-4">Vedant Pandey</h3>
            <p className="text-slate-300 mb-4">
              Final-year Computer Science Engineering student specializing in Computer Networking, 
              passionate about building innovative software solutions and exploring cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Vedant-Pandey563"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vedant-pandey-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ved2003ant@gmail.com"
                className="text-slate-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <a 
                href="mailto:ved2003ant@gmail.com"
                className="block hover:text-purple-400 transition-colors"
              >
                ved2003ant@gmail.com
              </a>
              <a 
                href="tel:+919110679932"
                className="block hover:text-purple-400 transition-colors"
              >
                +91 9110679932
              </a>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <p className="text-slate-300 text-sm">
            © {currentYear} Vedant Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;