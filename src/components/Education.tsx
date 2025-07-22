import React from 'react';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education: React.FC = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollReveal();
  
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      specialization: 'Computer Networking',
      institution: 'SRM Institute of Science and Technology',
      location: 'Chennai, Tamil Nadu',
      duration: '2022 - Ongoing',
      gpa: '9.07/10',
      relevant_courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Computer Networks',
        'Software Engineering',
        'Operating Systems',
        'Software Defined Networking',
        'Network Security',
        'Web Development',
        'Machine Learning Foundations'
      ],
      projects: [
        'Builder Connect - Patent Pending Web Portal',
        'NS2 Blackhole Attack Simulator',
        'Greedy Search Algorithm Optimization',
        'Live Chat Application with Client-Server Architecture'
      ]
    }
  ];

  return (
    <section 
      id="education" 
      ref={ref}
      className={`py-20 scroll-mt-16 transition-all duration-1000 ${
        isDark ? 'bg-slate-800' : 'bg-slate-50'
      } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Education
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Academic excellence and continuous learning journey that has shaped 
            my technical foundation in computer science and networking.
          </p>
        </div>

        {/* Formal Education */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Formal Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-700 border-slate-600' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start mb-3">
                      <GraduationCap className="text-purple-400 mr-3 mt-1" size={24} />
                      <div>
                        <h4 className={`text-xl font-semibold mb-1 ${
                          isDark ? 'text-white' : 'text-slate-800'
                        }`}>
                          {edu.degree}
                        </h4>
                        <p className="text-purple-400 font-medium mb-1">
                          Specialization: {edu.specialization}
                        </p>
                        <p className="text-purple-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className={`flex items-center mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <Calendar size={16} className="mr-2" />
                      {edu.duration}
                    </div>
                    <div className={`flex items-center mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                    <div className={`flex items-center ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <Trophy size={16} className="mr-2" />
                      CGPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className={`font-semibold mb-3 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant_courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                            isDark 
                              ? 'bg-slate-600 text-slate-200 border-slate-500' 
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className={`font-semibold mb-3 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      Key Projects
                    </h5>
                    <ul className="space-y-2">
                      {edu.projects.map((project, projectIndex) => (
                        <li
                          key={projectIndex}
                          className={`flex items-start ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span className="text-sm">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;