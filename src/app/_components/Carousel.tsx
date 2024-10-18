import React from "react";
import image from "../../../public/image/Frame 10.png";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="w-full h-full flex justify-center p-10">
      <div className="">
        <Image src={image} alt=""/>
      </div>
    </div>
  );
};

export default Carousel;
