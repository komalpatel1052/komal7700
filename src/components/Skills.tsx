import React from 'react';
import { Code, Database, Palette, Users, Lightbulb, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-purple-400" size={24} />,
      skills: [
        { name: 'C Programming', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'HTML', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="text-blue-400" size={24} />,
      skills: [
        { name: 'Git', level: 70 },
        { name: 'Linux', level: 65 },
        { name: 'Docker', level: 45 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-green-400" size={24} />,
      skills: [
        { name: 'Team Collaboration', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Creative Thinking', level: 88 }
      ]
    },
    {
      title: 'Creative Skills',
      icon: <Palette className="text-pink-400" size={24} />,
      skills: [
        { name: 'UI/UX Thinking', level: 75 },
        { name: 'Writing', level: 80 },
        { name: 'Sketching', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            A comprehensive overview of my technical and creative abilities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white ml-3">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-purple-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Goals */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center mb-6">
                <Lightbulb className="text-yellow-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Currently Learning</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm continuously expanding my skill set through my internship at LinuxWorld Informatics, 
                where I'm gaining hands-on experience with DevOps tools, collaborative development practices, 
                and real-world software development lifecycle. I'm also exploring advanced Python frameworks 
                and diving deeper into system administration with Linux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;