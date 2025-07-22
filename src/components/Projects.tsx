import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollReveal();
  
  const projects = [
    {
      title: 'Builder Connect – Web Portal for Verified Construction Services',
      description: 'A full-stack web portal connecting clients with verified builders and construction service providers. Features role-based authentication, secure access control, and intuitive user interface for showcasing builder profiles and project portfolios.',
      tech: ['Full-Stack Development', 'Authentication', 'Authorization', 'Web Development'],
      githubUrl: 'https://github.com/Vedant-Pandey563',
      featured: true,
      badge: 'Patent Pending'
    },
    {
      title: 'NS2 Blackhole Attack Simulator',
      description: 'Developed a simulation environment in NS2 to model and observe Black-hole attacks in networks where malicious nodes drop packets. Implemented AODV protocol routing scenarios and analyzed network performance metrics.',
      tech: ['NS2', 'Network Simulation', 'AODV Protocol', 'Security Analysis'],
      githubUrl: 'https://github.com/Vedant-Pandey563',
      featured: true
    },
    {
      title: 'Chatter.Box - A Live Chat Application',
      description: 'Engineered a real-time chat application with robust client-server architecture enabling seamless two-way communication across local networks. Implemented reliable message delivery and optimized concurrent client request handling.',
      tech: ['Real-time Communication', 'Client-Server Architecture', 'Network Programming', 'Concurrency'],
      githubUrl: 'https://github.com/Vedant-Pandey563/Live-Chat-App',
      featured: true
    },
    {
      title: 'Optimizing and Comparing Greedy Search Algorithms for Maze Solving',
      description: 'Designed and implemented Greedy Best-First Search Algorithm for maze solving using heuristic-driven approach. Conducted performance benchmarking against BFS and DFS algorithms, analyzing path length, traversal time, and computational efficiency.',
      tech: ['C++', 'Algorithms', 'Performance Analysis', 'Heuristics'],
      githubUrl: 'https://github.com/Vedant-Pandey563/Maze-Solver-made-using-Search-Algorithms-',
      featured: false,
      supervisor: 'Prof. Dr. Prabhu Chakkaravarthy A'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section 
      id="projects" 
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
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A showcase of my innovative projects, demonstrating expertise in networking, 
            algorithms, and full-stack development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border ${
                isDark 
                  ? 'bg-slate-700 border-slate-600 hover:shadow-purple-500/10' 
                  : 'bg-white border-slate-200 hover:shadow-purple-500/20'
              }`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className={`text-2xl font-semibold ${
                        isDark ? 'text-white' : 'text-slate-800'
                      }`}>
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 border ${
                          isDark 
                            ? 'bg-emerald-900 text-emerald-300 border-emerald-700' 
                            : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        }`}>
                          <Award size={14} />
                          {project.badge}
                        </span>
                      )}
                    </div>
                    {project.supervisor && (
                      <p className="text-purple-400 font-medium mb-2">
                        Supervisor: {project.supervisor}
                      </p>
                    )}
                  </div>
                </div>
                
                <p className={`mb-6 leading-relaxed text-lg ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors hover:scale-105 ${
                        isDark 
                          ? 'bg-slate-600 text-slate-200 border-slate-500 hover:bg-slate-500' 
                          : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 font-medium transition-all duration-300 hover:scale-105 ${
                      isDark 
                        ? 'text-slate-300 hover:text-purple-400' 
                        : 'text-slate-600 hover:text-purple-600'
                    }`}
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 border ${
                    isDark 
                      ? 'bg-slate-700 border-slate-600 hover:shadow-purple-500/10' 
                      : 'bg-white border-slate-200 hover:shadow-purple-500/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-lg font-semibold ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      {project.title}
                    </h4>
                  </div>
                  {project.supervisor && (
                    <p className="text-purple-400 font-medium mb-2 text-sm">
                      Supervisor: {project.supervisor}
                    </p>
                  )}
                  <p className={`mb-4 text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs font-medium border ${
                          isDark 
                            ? 'bg-slate-600 text-slate-300 border-slate-500' 
                            : 'bg-slate-100 text-slate-600 border-slate-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className={`px-2 py-1 rounded text-xs border ${
                        isDark 
                          ? 'bg-slate-600 text-slate-400 border-slate-500' 
                          : 'bg-slate-100 text-slate-500 border-slate-300'
                      }`}>
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-sm transition-colors hover:scale-105 ${
                        isDark 
                          ? 'text-slate-300 hover:text-purple-400' 
                          : 'text-slate-600 hover:text-purple-600'
                      }`}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;