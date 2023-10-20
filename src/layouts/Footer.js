import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[200px] bg-white flex  flex-col px-12 mb-4">
      <div className="mt-16 h-[50px] border-b w-full pb-6">
        <img src="Vector.svg" alt="" className=" w-[50px] h-[50px]" />
      </div>

      <div className="w-full h-full flex md:mt-14 mt-8 justify-center gap-12 text-gray-500">
        <h1 className="hover:underline cursor-pointer">
          Copyright Lemmonade Inc. 2023{" "}
        </h1>
        <h1 className="hover:underline cursor-pointer">Private Policy </h1>
      </div>
    </div>
  );
};

export default Footer;
