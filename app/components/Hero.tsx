import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <div className="w-full h-40 md:h-48 relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {title && (
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
