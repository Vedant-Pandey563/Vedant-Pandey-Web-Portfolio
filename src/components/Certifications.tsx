import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Certifications: React.FC = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollReveal();
  
  const certifications = [
    {
      title: 'Software Defined Networking',
      issuer: 'The University of Chicago (Coursera)',
      category: 'Networking',
      description: 'Advanced concepts in SDN architecture and implementation',
      link: 'https://drive.google.com/file/d/1i2HZB7muJ384AnwfSlEdy3Jk9VGGeRF9/view?usp=sharing'
    },
    {
      title: 'Introduction to Networks (CCNA)',
      issuer: 'Cisco',
      category: 'Networking',
      description: 'Fundamental networking concepts and Cisco technologies',
      link: 'https://drive.google.com/file/d/1_wHGNOSq6UcbfLTSjAHYj8tennw7ADqE/view?usp=sharing'
    },
    {
      title: 'Design and Analysis of Algorithms',
      issuer: 'NPTEL Certification',
      category: 'Computer Science',
      description: 'Advanced algorithmic techniques and complexity analysis',
      link: 'https://drive.google.com/file/d/1yh1bsRPjVf5obCc6zkrvQVcjWOpSqk2A/view?usp=sharing'
    },
    {
      title: 'Database Management System',
      issuer: 'NPTEL Certification',
      category: 'Database',
      description: 'Comprehensive database design and management principles',
      link: 'https://drive.google.com/file/d/1yh1bsRPjVf5obCc6zkrvQVcjWOpSqk2A/view?usp=sharing'
    },
    {
      title: 'Oracle Cloud Infrastructure – Foundations Associate',
      issuer: 'Oracle',
      category: 'Cloud Computing',
      description: 'Cloud infrastructure fundamentals and Oracle Cloud services',
      link: 'https://drive.google.com/file/d/1gkuoD4yhc59vg9nagWmZWPTkjQgka6ao/view?usp=sharing'
    },
    {
      title: 'AWS Academy Machine Learning Foundations',
      issuer: 'AWS Academy Graduate',
      category: 'Machine Learning',
      description: 'Machine learning concepts and AWS ML services',
      link: 'https://drive.google.com/file/d/1-vdwpW8YLq3xg2KQKRVeIqqCHsOL-gcK/view?usp=sharing'
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco',
      category: 'Networking',
      description: 'Fundamental networking protocols and concepts',
      link: 'https://drive.google.com/file/d/14Q3M-gUjJaN5d1GwXEwWMe_1bLs2RLTH/view?usp=sharing'
    },
    {
      title: 'Java Training Crash Course',
      issuer: 'Udemy',
      category: 'Programming',
      description: 'Comprehensive Java programming and development',
      link: 'https://drive.google.com/file/d/1-rCt4jSQLkV5_jE0kXcKfv6-f98vUJiw/view?usp=sharing'
    }
  ];

  const getCategoryColor = (category: string) => {
    const darkColors: { [key: string]: string } = {
      'Networking': 'bg-blue-900 text-blue-300 border-blue-700',
      'Computer Science': 'bg-emerald-900 text-emerald-300 border-emerald-700',
      'Database': 'bg-purple-900 text-purple-300 border-purple-700',
      'Cloud Computing': 'bg-orange-900 text-orange-300 border-orange-700',
      'Machine Learning': 'bg-red-900 text-red-300 border-red-700',
      'Programming': 'bg-indigo-900 text-indigo-300 border-indigo-700'
    };
    
    const lightColors: { [key: string]: string } = {
      'Networking': 'bg-blue-100 text-blue-800 border-blue-300',
      'Computer Science': 'bg-emerald-100 text-emerald-800 border-emerald-300',
      'Database': 'bg-purple-100 text-purple-800 border-purple-300',
      'Cloud Computing': 'bg-orange-100 text-orange-800 border-orange-300',
      'Machine Learning': 'bg-red-100 text-red-800 border-red-300',
      'Programming': 'bg-indigo-100 text-indigo-800 border-indigo-300'
    };
    
    const colors = isDark ? darkColors : lightColors;
    return colors[category] || (isDark ? 'bg-slate-700 text-slate-300 border-slate-600' : 'bg-slate-100 text-slate-700 border-slate-300');
  };

  const handleViewCertificate = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section 
      id="certifications" 
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
            Certifications & Training
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Professional certifications and specialized training from leading institutions 
            and technology companies, demonstrating continuous learning and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 hover:shadow-purple-500/10' 
                  : 'bg-slate-50 border-slate-200 hover:shadow-purple-500/20'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 border ${
                    isDark 
                      ? 'bg-purple-900 border-purple-700' 
                      : 'bg-purple-100 border-purple-300'
                  }`}>
                    <Award className="text-purple-400" size={20} />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
              
              <h3 className={`text-lg font-semibold mb-2 leading-tight ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                {cert.title}
              </h3>
              
              <p className="text-purple-400 font-medium mb-3">
                {cert.issuer}
              </p>
              
              <p className={`text-sm leading-relaxed mb-4 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {cert.description}
              </p>

              <button
                onClick={() => handleViewCertificate(cert.link)}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border ${
                  isDark 
                    ? 'bg-purple-900 text-purple-300 border-purple-700 hover:bg-purple-800 hover:text-purple-200' 
                    : 'bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200 hover:text-purple-900'
                }`}
              >
                <ExternalLink size={16} />
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;