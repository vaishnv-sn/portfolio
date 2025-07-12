import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
}

const ProjectCard = ({ title, description, image, tags, liveLink, codeLink }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-deepSpace/50 border border-starWhite/10 backdrop-blur-sm hover:border-starWhite/20 transition-all duration-500">
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-deepSpace via-transparent to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-nebulaPink group-hover:to-cosmicBlue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-deepSpace/50 text-gray-300 border border-starWhite/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-nebulaPink hover:text-nebulaPink/80 transition-colors group/link"
            >
              <ExternalLink className="w-4 h-4 transform group-hover/link:rotate-45 transition-transform" />
              Live Demo
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-cosmicBlue hover:text-cosmicBlue/80 transition-colors group/link"
            >
              <Github className="w-4 h-4 transform group-hover/link:scale-110 transition-transform" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;