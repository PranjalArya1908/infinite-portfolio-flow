
import React from 'react';

const SkillsBanner = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Next.js', 'Vue.js', 'Angular',
    'Tailwind CSS', 'CSS3', 'HTML5', 'Node.js', 'Express', 'MongoDB',
    'PostgreSQL', 'Git', 'Docker', 'AWS', 'Figma', 'Sass'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="bg-white/30 dark:bg-black/20 backdrop-blur-lg rounded-3xl p-8 border border-white/40 dark:border-white/20 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Constantly learning and working with cutting-edge technologies to build amazing digital experiences
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 px-6 py-3 bg-white/40 dark:bg-black/30 backdrop-blur-lg rounded-2xl border border-white/50 dark:border-white/20 hover:bg-white/50 dark:hover:bg-black/40 transition-all duration-300 shadow-lg"
            >
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBanner;
