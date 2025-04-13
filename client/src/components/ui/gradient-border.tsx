import React from "react";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorder: React.FC<GradientBorderProps> = ({ children, className = "" }) => {
  return (
    <div className={`gradient-border ${className}`}>
      {children}
    </div>
  );
};

// Add the CSS for gradient-border to the global styles in main.tsx
// Add this to the style tag in main.tsx:
/*
.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  background: linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1));
}

.gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  padding: 1px;
  background: linear-gradient(120deg, #9333EA, #3B82F6, #0D9488);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.text-shadow-glow {
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
}

.perspective-1000 {
  perspective: 1000px;
}

.hover\:rotate-y-5:hover {
  transform: rotateY(5deg);
}

.hover\:rotate-x-2:hover {
  transform: rotateX(2deg);
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
*/
