import React from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  
  const handleResumeView = () => {
    window.open('https://drive.google.com/drive/folders/1MZr-elUHyyUGGSzoA_ZaoUL3FHKqQmDV?usp=sharing', '_blank');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center animate-fadeInUp">
          {/* Profile Photo */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/profile.jpg"
              alt="Vedant Pandey - Computer Science Engineering Student"
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-white text-4xl font-bold">VP</div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 animate-slideInLeft ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Hi, I'm <span className="text-purple-400 animate-pulse">Vedant Pandey</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slideInRight ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Final-Year Computer Science Engineering Student specializing in Computer Networking, 
            passionate about building impactful software solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={handleResumeView}
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ExternalLink size={20} />
              View Resume
            </button>
            <a
              href="#contact"
              className={`flex items-center gap-2 border-2 border-purple-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                isDark 
                  ? 'text-purple-400 hover:bg-purple-400 hover:text-white' 
                  : 'text-purple-600 hover:bg-purple-600 hover:text-white'
              }`}
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/Vedant-Pandey563"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border ${
                isDark 
                  ? 'bg-slate-800 text-slate-300 hover:text-purple-400 border-slate-700' 
                  : 'bg-white text-slate-600 hover:text-purple-600 border-slate-200'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-pandey-"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border ${
                isDark 
                  ? 'bg-slate-800 text-slate-300 hover:text-purple-400 border-slate-700' 
                  : 'bg-white text-slate-600 hover:text-purple-600 border-slate-200'
              }`}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;