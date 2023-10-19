import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="carousel-card md:text-lg text-md ">
      <div className=" flex w-full items-center gap-8">
        <img
          src={imgUrl}
          alt={imgTitle}
          className="w-[50px] h-[50px] rounded-full"
        ></img>
        <h1>{imgTitle}</h1>
      </div>

      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h1>
    </div>
  );
}
