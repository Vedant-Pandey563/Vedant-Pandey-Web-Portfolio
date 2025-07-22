import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      // Check if scrolled past home section
      setIsScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const headerClasses = activeSection === 'home' 
    ? "fixed top-0 left-0 right-0 bg-transparent z-50 transition-all duration-300"
    : `fixed top-0 left-0 right-0 bg-transparent hover:${isDark ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg z-50 border-b ${isDark ? 'border-slate-700' : 'border-slate-200'} transition-all duration-300 group`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`font-bold text-xl transition-colors ${activeSection === 'home' ? 'text-white' : isDark ? 'text-white group-hover:text-white' : 'text-slate-800 group-hover:text-slate-800'}`}>
            Vedant Pandey
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id 
                    ? (activeSection === 'home' ? 'text-purple-400' : isDark ? 'text-purple-400' : 'text-purple-600')
                    : (activeSection === 'home' ? 'text-slate-300 hover:text-purple-400' : isDark ? 'text-slate-300 hover:text-purple-400 group-hover:text-slate-300' : 'text-slate-600 hover:text-purple-600 group-hover:text-slate-600')
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                activeSection === 'home' 
                  ? 'text-slate-300 hover:text-purple-400 hover:bg-slate-800/50' 
                  : isDark 
                    ? 'text-slate-300 hover:text-purple-400 hover:bg-slate-800 group-hover:text-slate-300' 
                    : 'text-slate-600 hover:text-purple-600 hover:bg-slate-100 group-hover:text-slate-600'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                activeSection === 'home' 
                  ? 'text-white hover:bg-slate-800/50' 
                  : isDark 
                    ? 'text-white hover:bg-slate-800 group-hover:text-white' 
                    : 'text-slate-800 hover:bg-slate-100 group-hover:text-slate-800'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`p-2 transition-colors ${
                activeSection === 'home' ? 'text-white' : isDark ? 'text-white group-hover:text-white' : 'text-slate-800 group-hover:text-slate-800'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'} animate-fadeIn`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? (isDark ? 'text-purple-400' : 'text-purple-600')
                    : (isDark ? 'text-slate-300 hover:text-purple-400 group-hover:text-slate-300' : 'text-slate-600 hover:text-purple-600 group-hover:text-slate-600')
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;