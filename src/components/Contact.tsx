import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  const handleResumeView = () => {
    window.open('https://drive.google.com/drive/folders/1MZr-elUHyyUGGSzoA_ZaoUL3FHKqQmDV?usp=sharing', '_blank');
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 scroll-mt-16 transition-all duration-1000 ${
        isDark ? 'bg-slate-900' : 'bg-white'
      } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 border ${
                  isDark 
                    ? 'bg-purple-900 border-purple-700' 
                    : 'bg-purple-100 border-purple-300'
                }`}>
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>Email</p>
                  <a 
                    href="mailto:ved2003ant@gmail.com"
                    className={`transition-colors ${
                      isDark 
                        ? 'text-slate-300 hover:text-purple-400' 
                        : 'text-slate-600 hover:text-purple-600'
                    }`}
                  >
                    ved2003ant@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 border ${
                  isDark 
                    ? 'bg-purple-900 border-purple-700' 
                    : 'bg-purple-100 border-purple-300'
                }`}>
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>Phone</p>
                  <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>+91 9110679932</p>
                </div>
              </div>

              <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 border ${
                  isDark 
                    ? 'bg-purple-900 border-purple-700' 
                    : 'bg-purple-100 border-purple-300'
                }`}>
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>Location</p>
                  <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/vedant-pandey-"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 border ${
                  isDark 
                    ? 'bg-slate-800 text-slate-300 hover:text-purple-400 hover:shadow-xl border-slate-700' 
                    : 'bg-white text-slate-600 hover:text-purple-600 hover:shadow-xl border-slate-200'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Vedant-Pandey563"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 border ${
                  isDark 
                    ? 'bg-slate-800 text-slate-300 hover:text-purple-400 hover:shadow-xl border-slate-700' 
                    : 'bg-white text-slate-600 hover:text-purple-600 hover:shadow-xl border-slate-200'
                }`}
              >
                <Github size={20} />
              </a>
            </div>

            {/* Resume Download */}
            <button
              onClick={handleResumeView}
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ExternalLink size={20} />
              View Resume
            </button>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className={`rounded-xl p-8 shadow-lg border transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                Connect with me
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 ${
                      isDark 
                        ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-400' 
                        : 'border-slate-300 bg-white text-slate-800 placeholder-slate-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 ${
                      isDark 
                        ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-400' 
                        : 'border-slate-300 bg-white text-slate-800 placeholder-slate-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 ${
                    isDark 
                      ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-400' 
                      : 'border-slate-300 bg-white text-slate-800 placeholder-slate-500'
                  }`}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-vertical ${
                    isDark 
                      ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-400' 
                      : 'border-slate-300 bg-white text-slate-800 placeholder-slate-500'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;