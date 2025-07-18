import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            Let's connect and explore opportunities together
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply connect with fellow tech enthusiasts. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-purple-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a href="mailto:komalpatel77008@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">komalpatel77008@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-green-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-gray-300">India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/komalpatel1052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:text-purple-300 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/komal-patel-7bbb10368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:komalpatel77008@gmail.com"
                    className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 hover:bg-pink-500/30 hover:text-pink-300 transition-all duration-300"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;