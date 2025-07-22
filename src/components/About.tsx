import React from 'react';
import { Code, Network, Database, Lightbulb } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollReveal();
  
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Developer',
      description: 'Experienced in building scalable web applications and systems'
    },
    {
      icon: <Network size={24} />,
      title: 'Network Specialist',
      description: 'Specializing in Computer Networking and SDN technologies'
    },
    {
      icon: <Database size={24} />,
      title: 'Algorithm Expert',
      description: 'Strong foundation in data structures and algorithm optimization'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation Focused',
      description: 'Patent-pending projects and creative problem-solving approach'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 scroll-mt-16 transition-all duration-1000 ${
        isDark ? 'bg-slate-800' : 'bg-white'
      } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            About Me
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A passionate Computer Science Engineering student with expertise in networking, 
            full-stack development, and innovative software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`leading-relaxed mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              I'm Vedant Pandey, a final-year Computer Science Engineering student specializing in 
              Computer Networking at SRM Institute of Science and Technology. With a CGPA of 9.07/10, 
              I'm a hardworking and detail-oriented individual passionate about building impactful software.
            </p>
            <p className={`leading-relaxed mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              My academic and project journey has given me hands-on experience in full-stack web development, 
              network simulation, real-time communication systems, and algorithm optimization. I've engineered 
              systems ranging from a chat application and Blackhole attack simulator to a patent-pending web 
              portal – Builder Connect, which connects clients with verified construction services.
            </p>
            <p className={`leading-relaxed mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              I'm proficient in C++, Python, SQL, and modern web technologies like HTML, CSS, JavaScript, 
              and TypeScript, and I actively apply these skills in developing scalable, efficient, and secure applications.
            </p>
            <p className={`leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Beyond academics, I constantly explore emerging technologies such as Software Defined Networking, 
              Cloud Computing, and Data Science. When I'm not coding, you'll find me keeping up with tech trends, 
              contributing to open-source, or improving my skills through new challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border ${
                  isDark 
                    ? 'bg-slate-700 border-slate-600 hover:shadow-purple-500/10' 
                    : 'bg-slate-50 border-slate-200 hover:shadow-purple-500/20'
                }`}
              >
                <div className="text-purple-400 mb-3 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className={`font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>
                  {highlight.title}
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;