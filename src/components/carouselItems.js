import React from "react";

export default function CarouselItem({ imgUrl, imgTitle,text }) {
  return (
    <div className="carousel-card md:text-lg text-md overflow-hidden py-2">
      <div className=" flex w-full items-center gap-8">
        <img
          src={imgUrl}
          alt={imgTitle}
          className="w-[50px] h-[50px] rounded-full"
        ></img>
        <h1>{imgTitle}</h1>
      </div>

      <h1 className="mt-6">
        {text}
      </h1>
    </div>
  );
}
