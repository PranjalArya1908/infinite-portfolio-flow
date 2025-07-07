
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-lg border-b border-white/20 dark:border-white/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-500 transition-colors text-gray-900 dark:text-white">Home</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors text-gray-900 dark:text-white">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors text-gray-900 dark:text-white">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors text-gray-900 dark:text-white">Contact</a>
        </div>
        
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 text-gray-900 dark:text-white"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
