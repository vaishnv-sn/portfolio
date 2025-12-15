import React, { useState } from "react";

// Variant 1: Gradient with Ripple Effect
export const CVButtonRipple = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    // Download logic
    const cvUrl = "/Vaishnav_SN-MERN-Stack-SDE_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Vaishnav_SN-MERN-Stack-SDE-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 group"
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white rounded-full opacity-75 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span className="tracking-wide">Download CV</span>
    </button>
  );
};

export default CVButtonRipple;
