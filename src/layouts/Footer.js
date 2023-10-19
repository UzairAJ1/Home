import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-[#282828] flex  ">
      <div className="mt-16 ml-24 h-[50px]">
        <img src="Vector.svg" alt="" className="w-[50px] h-[50px]" />
      </div>
      <div className="md:w-1/3 w-2/3 h-full flex gap-12 pt-16 md:pl-8 pl-4 text-white">
        <h1 className="hover:underline cursor-pointer">About us </h1>
        <h1 className="hover:underline cursor-pointer">Private Policy </h1>
      </div>
    </div>
  );
};

export default Footer;
