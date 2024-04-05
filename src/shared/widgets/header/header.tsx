"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import NavItem from "./NavItem";
import { navItems } from "@/app/configs/constants";
import Toolbox from "./Toolbox";
import Cart from "../../../modules/home/cart"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
export default function Header() {
  const [MenuOpen, setMenuOpen] = useState<true | false>(false);
  //className="w-full sticky top-0 left-0 z-[10] border-b border-b[#02010A] px-5 text-blue-600 bg-gray-100 flex items-center justify-between"
  return (
    <Navbar isBordered onMenuOpenChange={setMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={MenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo>
            <Link href="/"></Link>
          </Logo>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item: NavItems, index: number) => {
          return (
            <NavbarItem key={index}>
              <NavItem index={index} url="">
                {item.title}
              </NavItem>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-blue-600" href="#">
                {item.title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>

      <NavbarContent justify="end">
        <NavbarItem>
          <Toolbox classNames="justify-self-end"></Toolbox>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Cart>
          <h1>Test</h1>
          <p>Test2</p>
        </Cart>
      </NavbarContent>
    </Navbar>
  );
}
