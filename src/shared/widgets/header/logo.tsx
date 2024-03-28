import React from "react";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100"
    height="100"
  >
    {/* Background */}
    <rect width="100" height="100" fill="#ffffff" />
    {/* Envelope */}
    <path d="M20 35h60v40H20z" fill="#3498db" />
    <path d="M80 35L50 60 20 35" fill="#2980b9" />
    {/* Flap */}
    <path d="M20 35l40 25 40-25v10L60 70 20 45z" fill="#ffffff" />
  </svg>
);

export default Logo;
