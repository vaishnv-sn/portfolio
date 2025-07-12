import React from 'react';
import { Coffee } from 'lucide-react';

const SupportButton = () => {
  return (
    <a
      href="https://buymeacoffee.com/kanish"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 backdrop-blur-sm"
    >
      <Coffee className="w-4 h-4" />
      <span className="text-sm font-medium">Buy me a coffee</span>
    </a>
  );
};

export default SupportButton;