import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Komal Kumari</h3>
              <p className="text-gray-300">
                Aspiring Software Engineer | Tech Enthusiast | Creative Mind
              </p>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="text-red-400" size={16} />
              <span>and</span>
              <Code className="text-purple-400" size={16} />
              <span>by Komal Kumari</span>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Komal Kumari. All rights reserved. | Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;