import React from 'react';
import { ExternalLink, Github, Folder, Code, Palette, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing my skills and projects with beautiful animations and clean design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      icon: <Code className="text-purple-400" size={24} />,
      status: 'Completed'
    },
    {
      title: 'Python Automation Scripts',
      description: 'Collection of Python scripts for automating daily tasks and data processing workflows.',
      technologies: ['Python', 'Automation', 'File Processing'],
      category: 'Automation',
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      status: 'In Progress'
    },
    {
      title: 'UI/UX Design Projects',
      description: 'Creative design projects combining my technical skills with artistic vision for user-centered solutions.',
      technologies: ['UI/UX', 'Design Thinking', 'Sketching'],
      category: 'Design',
      icon: <Palette className="text-pink-400" size={24} />,
      status: 'Ongoing'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Projects & Work
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            Showcasing my journey through code, creativity, and innovation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {project.icon}
                    <Folder className="text-gray-400 ml-2" size={20} />
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      <a href="https://github.com/komalpatel1052" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    </button>
                    <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {project.category}
                  </span>
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : project.status === 'In Progress'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon!</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm constantly working on new projects and expanding my portfolio. Stay tuned for exciting 
                developments in web development, automation, and creative design projects. Each project 
                represents a step forward in my journey to become a skilled software engineer.
              </p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Watch This Space
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;