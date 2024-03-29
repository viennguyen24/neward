import Image from "next/image";
import React from "react";

interface HighlighProps {
  url: string;
  imgWidth?: number | null;
  imgHeight?: number | null;
  children?: React.ReactNode;
}
const Highlight: React.FC<HighlighProps> = ({
  url,
  imgWidth,
  imgHeight,
  children,
}) => {
  return (
    <section>
      <div className="my-20 flex justify-center items-center px-20 w-full">
        <Image
          src={url}
          alt="Highlighted image"
          width={imgWidth ? imgWidth : 400}
          height={imgHeight ? imgHeight : 400}
        />
        <div className="justify-self-end highlight-text flex-1 md:flex-[40%] flex flex-col items-center justify-center gap-10 text-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Highlight;
