import React from "react";

interface FeatureProps {
  children?: React.ReactNode;
}
const Features: React.FC<FeatureProps> = ({ children }) => {
  return (
    <section className="benefit-cover w-full min-h-[60dvh] relative flex flex-col items-center justify-center">
      {children}
    </section>
  );
};
export default Features;
