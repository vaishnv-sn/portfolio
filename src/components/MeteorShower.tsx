import React, { useEffect, useRef } from 'react';

const MeteorShower = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';
      
      // Random position and size
      const startX = Math.random() * window.innerWidth;
      const startY = -50;
      const size = Math.random() * 2 + 1;
      
      meteor.style.cssText = `
        position: absolute;
        left: ${startX}px;
        top: ${startY}px;
        width: ${size}px;
        height: ${size * 50}px;
        transform: rotate(45deg);
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%);
        animation: meteor 1s linear forwards;
        pointer-events: none;
      `;
      
      container.appendChild(meteor);
      
      // Remove meteor after animation
      setTimeout(() => {
        meteor.remove();
      }, 1000);
    };

    // Create meteors periodically
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance each interval
        createMeteor();
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    />
  );
};

export default MeteorShower;