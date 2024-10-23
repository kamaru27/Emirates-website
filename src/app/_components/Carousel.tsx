/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import BannerImage from "../../../public/image/BannerImage.png";
import Image from "next/image";
import ArrowAnimation from "../../../public/svg/ArrowAnimation";
import { storageUrl } from "@/utils/baseUrl";

type Props = {
  carousel:any
}

const Banner = ({carousel}:Props) => {
  return (
    <div className="md:px-[65px] px-8 pt-10 w-full flex justify-center">
      <div className="sm:h-[660px] h-[440px] w-[1320px]  relative flex  justify-center items-center">
        <Image
          src={storageUrl+carousel.at(0).image}
          alt="Banner-Image"
          fill
          className="object-cover rounded-[24px]"
        />
        <div className="absolute bottom-7 right-8 sm:right-16">
          <ArrowAnimation />
        </div>
        <div className="absolute left-[-78.7px] top-44">
          <h2 className="bg-[#232321] p-6 -rotate-90  rounded-b-2xl text-white font-rubik font-semibold text-[16px]">
            Lenskart-Cool collection
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
