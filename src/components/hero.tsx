import React from "react";

interface HeroProps {
  children?: React.ReactNode;
}
const Hero: React.FC<HeroProps> = ({ children }: HeroProps) => {
  return (
    <header>
      <div className="bg-animation min-h-screen min-w-full bg-cover bg-no-repeat flex flex-col justify-center items-center gap-10">
        {children}
      </div>
    </header>
  );
};

export default Hero;
