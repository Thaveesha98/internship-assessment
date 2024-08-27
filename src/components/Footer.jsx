import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[10vh] bg-green-700 flex items-center justify-center text-white px-4">
      <p className="text-center text-sm md:text-base lg:text-lg">
        © {new Date().getFullYear()} Powered by Nugo Tech. All rights reserved.
        Designed by Thaveesha Yanith.
      </p>
    </div>
  );
};

export default Footer;
