import React from 'react';
import { useTheme } from './ThemeProvider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollReveal();
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'C', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'XML', 'CSS', 'JavaScript', 'TypeScript', 'Web Development']
    },
    {
      title: 'Computer Science Fundamentals',
      skills: ['Data Structures', 'Algorithms', 'Database Management', 'Software Engineering']
    },
    {
      title: 'Specialized Areas',
      skills: ['Data Science', 'Computer Networking', 'Network Simulation', 'Algorithm Optimization']
    },
    {
      title: 'Technologies & Tools',
      skills: ['NS2 Simulator', 'Git', 'Linux', 'Cloud Computing', 'Software Defined Networking']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Technical Documentation']
    }
  ];

  const getSkillColor = (index: number) => {
    const darkColors = [
      'bg-purple-900 text-purple-300 border-purple-700',
      'bg-emerald-900 text-emerald-300 border-emerald-700',
      'bg-blue-900 text-blue-300 border-blue-700',
      'bg-orange-900 text-orange-300 border-orange-700',
      'bg-red-900 text-red-300 border-red-700',
      'bg-indigo-900 text-indigo-300 border-indigo-700'
    ];
    
    const lightColors = [
      'bg-purple-100 text-purple-800 border-purple-300',
      'bg-emerald-100 text-emerald-800 border-emerald-300',
      'bg-blue-100 text-blue-800 border-blue-300',
      'bg-orange-100 text-orange-800 border-orange-300',
      'bg-red-100 text-red-800 border-red-300',
      'bg-indigo-100 text-indigo-800 border-indigo-300'
    ];
    
    return isDark ? darkColors[index % darkColors.length] : lightColors[index % lightColors.length];
  };

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 scroll-mt-16 transition-all duration-1000 ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
      } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A comprehensive toolkit of technologies and expertise I've developed 
            throughout my academic and project journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 hover:shadow-purple-500/10' 
                  : 'bg-white border-slate-200 hover:shadow-purple-500/20'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getSkillColor(categoryIndex)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;