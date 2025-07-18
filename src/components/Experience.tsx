import React from 'react';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'LinuxWorld Informatics Pvt. Ltd.',
      location: 'Remote',
      period: 'Current',
      description: 'Gaining hands-on experience in software development, DevOps tools, and collaborative project work.',
      achievements: [
        'Exploring the complete software development lifecycle',
        'Working with DevOps tools and methodologies',
        'Collaborating on impactful real-world projects',
        'Solving practical tech challenges in a professional environment',
        'Building expertise in Linux, Git, and Docker'
      ],
      technologies: ['Linux', 'Git', 'Docker', 'Python', 'DevOps']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            My professional journey and learning experiences
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <Building className="text-purple-400 mr-3" size={24} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-xl text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center text-gray-300 mb-2">
                      <Calendar className="mr-2" size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="mr-2" size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements & Learning:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <CheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future Goals */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Looking Forward</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm actively seeking opportunities to contribute to innovative projects and work with global 
                tech companies like Google and Amazon. My goal is to leverage my growing technical expertise 
                and creative problem-solving skills to make a meaningful impact in the software development industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;