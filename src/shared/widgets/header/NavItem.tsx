import React from "react";
import Link from "next/link";

interface NavItemProps {
  index: number;
  url: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ index, url, children }) => {
  return (
    <Link key={index} href={url} className="text-lg">
      {children}
    </Link>
  );
};

export default NavItem;
