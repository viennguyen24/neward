import Header from "../../shared/widgets/header/header";
import Hero from "./hero";
import Branding from "./branding";
import Features from "./features";

import { Button } from "@nextui-org/react";
import { partners } from "@/app/configs/constants";
import Highlight from "./highlight";
export default function Home() {
  return (
    <>
      <Header />
      <Hero>
        <h1 className="antialiased font-semibold tracking-wide text-white text-8xl text-center">
          The best digtial <span className="text-indigo-800">newsletter</span>{" "}
          platform built for you
        </h1>
        <Button size="lg" radius="sm" variant="shadow">
          Learn more
        </Button>
      </Hero>
      <Branding graphics={partners} />
      <Features>
        <div className="text-center">
          <h1 className="font-semibold text-4xl tracking-wider subpixel-antialiased color-title my-4 my-10">
            Everything you need to succeed available in a single business form
          </h1>
          <p className="text-4xl text-gray-600 z-[-1] mx-0">
            Build. Explore. Be creative without the cost of complexities.
          </p>
        </div>
      </Features>
      <Highlight url="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png">
        <>
          <h1 className="font-semibold text-4xl tracking-wider subpixel-antialiased color-title  mb-5">
            Build & Innovate
          </h1>
          <p className="text-lg text-gray-600 z-[-1]">
            Powerful tools for digital communications and graphic storytelling
          </p>
          <p className="text-lg text-gray-600 z-[-1]">
            A communication experience unlike anything you have ever experienced
          </p>
          <Button color="primary" size="md">
            Start building
          </Button>
        </>
      </Highlight>
    </>
  );
}
