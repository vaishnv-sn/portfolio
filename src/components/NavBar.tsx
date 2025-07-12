import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deepSpace/95 backdrop-blur-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="group relative">
            <div className="text-2xl font-bold relative">
              <span className="animate-signature-draw inline-block">
                <span className="bg-gradient-to-r from-nebulaPink via-cosmicBlue to-violet-500 text-transparent bg-clip-text">
                  KV
                </span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-nebulaPink via-cosmicBlue to-violet-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-nebulaPink transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-nebulaPink transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-nebulaPink transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-nebulaPink transition-colors"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-nebulaPink to-cosmicBlue text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
