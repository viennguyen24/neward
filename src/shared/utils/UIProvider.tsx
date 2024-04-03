"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}
export default function UIProviders({ children }: ProviderProps) {
  const pathname = usePathname(); //accessing the current URL pathname in a Next.js application.
  return (
    //For NextUI to work correctly, we need to set up the NextUIProvider at the root of our application.
    <NextUIProvider>
      {/* if our current url is /dashboard/new-email, then we will render the wrapper div. else we render whatever children the Provider wraps around */}
      {pathname === "/dashboard/new-email" ? (
        <div className="w-full flex">
          <div className="max-w-xl h-screen overflow-y-scroll"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  );
}
