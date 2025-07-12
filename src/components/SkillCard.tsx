import React from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
  delay?: number;
}

const SkillCard = ({ name, icon, color, delay = 0 }: SkillCardProps) => {
  return (
    <div 
      className="group bg-deepSpace/50 p-6 rounded-lg text-center hover:bg-cosmicPurple/20 transition-all duration-300 transform hover:-translate-y-2 border border-starWhite/5 hover:border-starWhite/20 backdrop-blur-sm animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-16 h-16 mx-auto mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-nebulaPink/10 to-cosmicBlue/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
        <img 
          src={icon} 
          alt={name} 
          className={`w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${color} group-hover:scale-110 transition-transform duration-300`} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nebulaPink/5 to-cosmicBlue/5 rounded-full animate-pulse"></div>
      </div>
      <h3 className="font-semibold text-starWhite group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-nebulaPink group-hover:to-cosmicBlue transition-all duration-300">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;