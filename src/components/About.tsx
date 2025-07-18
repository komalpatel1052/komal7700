import React from 'react';
import { GraduationCap, Code, Palette, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            Discover my journey, passion, and aspirations
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-purple-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science Engineering at Vivekananda Global University. 
                  In my third year, building a strong foundation in programming and software development.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Strong command over C programming, Python, and HTML. Currently expanding my expertise 
                  through hands-on experience with Git, Linux, and Docker during my internship.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Palette className="text-pink-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-white">Creative Side</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Beyond coding, I have a creative spark. I enjoy writing and drawing, which gives me 
                  a unique edge in UI/UX thinking and storytelling through design.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Target className="text-green-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-white">Career Goal</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Aspiring to work with global tech giants like Google and Amazon, where I can contribute 
                  to innovative projects while continuously learning and growing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <p className="text-lg text-gray-300 leading-relaxed italic">
                "My journey is a blend of logic and creativity, tradition and innovation. I believe in 
                leveraging both technical expertise and creative thinking to build meaningful solutions 
                that make a difference."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;