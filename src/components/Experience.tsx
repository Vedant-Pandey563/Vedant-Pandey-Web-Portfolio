import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Software Development Intern',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing code.',
      achievements: [
        'Improved application performance by 25%',
        'Implemented 3 new features that increased user engagement',
        'Participated in code reviews and agile development processes'
      ]
    },
    {
      type: 'internship',
      title: 'Frontend Developer Intern',
      company: 'Digital Innovations Ltd.',
      location: 'New York, NY',
      duration: 'Dec 2023 - Feb 2024',
      description: 'Focused on frontend development using modern JavaScript frameworks. Built responsive user interfaces and integrated APIs.',
      achievements: [
        'Developed 5+ responsive web pages',
        'Integrated REST APIs for dynamic content',
        'Collaborated with UX/UI team on design implementation'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Nov 2024',
      credentialId: 'AWS-12345'
    },
    {
      title: 'Google Cloud Associate Engineer',
      issuer: 'Google Cloud',
      date: 'Sep 2024',
      credentialId: 'GCP-67890'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'Jul 2024',
      credentialId: 'META-11111'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'May 2024',
      credentialId: 'STAN-22222'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Maintained GPA above 3.8 for 6 consecutive semesters',
      date: '2022-2024'
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in University Tech Hackathon with AI-powered solution',
      date: 'Mar 2024'
    },
    {
      title: 'Best Project Award',
      description: 'Outstanding final year project in Machine Learning category',
      date: 'Dec 2024'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular GitHub repositories with 100+ commits',
      date: '2023-2024'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional experience, certifications, and notable achievements 
            throughout my academic and professional journey.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center text-slate-600 mb-1">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start text-slate-600"
                      >
                        <span className="text-blue-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
              >
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {cert.title}
                </h4>
                <p className="text-blue-600 font-medium mb-2">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>{cert.date}</span>
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Notable Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start mb-3">
                  <Award className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  {achievement.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;