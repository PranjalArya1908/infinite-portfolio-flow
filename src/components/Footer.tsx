
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-gray-300 mb-6">
              Building the future, one line of code at a time.
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Frontend Developer Portfolio. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
