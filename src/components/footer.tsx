import React from "react";
import InputForm from "@/components/inputForm";
import NavItem from "./NavItem";
import { Button } from "@nextui-org/react";
import { CiMail } from "react-icons/ci";
import { cn } from "@/shared/utils/functions";
interface FooterProps {
  copyright?: string;
  links: { title: string }[];
  className?: string;
}
const Footer: React.FC<FooterProps> = ({
  links,
  copyright,
  className,
}: FooterProps) => {
  return (
    <footer className={cn("w-full flex flex-col center-between", className)}>
      <div className="w-full flex justify-evenly my-5">
        <InputForm
          icon={<CiMail />}
          heading="Subscribe to our monthly newsletter to not miss out on any opportunities!"
        >
          <Button color="primary">Submit</Button>
        </InputForm>
        <div className="flex flex-col items-center justify-evenly gap-5">
          {links.map((link) => {
            return <NavItem url="#">{link.title}</NavItem>;
          })}
        </div>
      </div>
      <p className="text-center subpixel-antialiased text-xl font-light text-gray-700">
        {copyright}
      </p>
    </footer>
  );
};
export default Footer;
