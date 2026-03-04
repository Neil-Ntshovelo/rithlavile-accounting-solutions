import React from "react";
import logo from "../assets/logo.PNG";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Ritlhavile Accounting Solutions"
      className="w-28 sm:w-36 lg:w-40 h-auto object-contain rounded-md"
      loading="lazy"
    />
  );
};

export default Logo;