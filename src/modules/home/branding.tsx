import { partners } from "@/app/configs/constants";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";

interface BrandingProps {
  children?: React.ReactNode;
  graphics: PartnersTypes[];
}
const Branding: React.FC<BrandingProps> = ({ children, graphics }) => {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center gap-20 text-center z-[10000] ">
      <h3 className="font-semibold text-6xl tracking-wider subpixel-antialiased color-title my-4">
        Created by professionals in digital designers and programmers
      </h3>
      <p className="text-4xl text-gray-600 z-[-1] mx-0">
        Bring fourth the power of communication
      </p>
      <Marquee className="flex">
        {graphics.map((item: PartnersTypes, index: number) => {
          return (
            <>
              <Image
                src={item.url}
                key={item.url}
                alt="partner image"
                width={400}
                height={200}
                className="md:mx-8 w-[150px] md:w-[180px] mx-3"
              />
            </>
          );
        })}
      </Marquee>
    </section>
  );
};
export default Branding;
