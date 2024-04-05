import Header from "../../shared/widgets/header/header";
import Hero from "./hero";
import Branding from "./branding";
import Features from "./features";
import CardList from "./cardList";
import TextCard from "./TextCard";

import { FaArrowRight } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import {Plans} from "../../app/configs/constants"
import { Button } from "@nextui-org/react";
import { partners } from "@/app/configs/constants";
import Highlight from "./highlight";
export default function Home() {
  return (
    <>
      <Header />
      <Hero>
        <h1 className="antialiased font-semibold tracking-wide text-white text-6xl text-center max-w-[45%]">
          The best digtial <span className="text-indigo-800">newsletter</span>{" "}
          platform built for you
        </h1>
        <Button size="lg" radius="sm" variant="shadow" color="primary">
          Learn more
        </Button>
      </Hero>
      <Branding graphics={partners} />
      <Features>
        <div className="text-center">
          <h1 className=" color-title my-4 text-6xl">
            Everything you need to succeed available in a single business form
          </h1>
          <p className="text-4xl color-subtitle z-[-1] mx-0">
            Build. Explore. Be creative without the cost of complexities.
          </p>
        </div>
      </Features>
      <Highlight url="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png">
        <>
          <h1 className="text-6xl color-title  mb-5">
            Build & Innovate
          </h1>
          <p className="color-subtitle z-[-1]">
            Powerful tools for digital communications and graphic storytelling
          </p>
          <p className="color-subtitle z-[-1]">
            A communication experience unlike anything you have ever experienced
          </p>
          <Button color="primary" size="md">
            Start building
          </Button>
        </>
      </Highlight>
      <CardList content = {Plans} iconFooter={<FaArrowRight />} iconHeader={<ImPriceTags />}>
        <h1 className="color-title text-6xl">Discover tailored pricing solutions <span className="font-bold">designed just for you</span></h1>
        <p className="color-subtitle">The best shit you can ask for</p>
      </CardList>
    </>
  );
}
