import React from "react";
import Link from "next/link";
import Logo from "./logo";
import NavItem from "./NavItem";
import { navItems } from "@/app/configs/constants";
import Toolbox from "./Toolbox";
export default function Header() {
  return (
    <header className="w-full sticky top-0 left-0 z-[10] border-b border-b[#02010A] px-5 flex items-center justify-between text-blue-600 bg-gray-100">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex-1 max-w-lg flex items-center justify-evenly">
        {navItems.map((item: NavItems, index: number) => {
          return (
            <NavItem url={"/"} index={index}>
              <p>{item.title}</p>
            </NavItem>
          );
        })}
      </nav>
      <Toolbox />
    </header>
  );
}
