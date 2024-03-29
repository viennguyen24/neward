import React from "react";

interface Props {
  children?: React.ReactNode;
}
const Logo = ({ children }: Props) => (
  <div className="h-full ">
    <svg
      className="w-12 h-full text-black"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
      />
    </svg>
    {children}
  </div>
);

export default Logo;
