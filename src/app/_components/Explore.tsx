/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import Women from "../../../public/image/ForWomen.png";
// import men from "../../../public/image/ForMen.png";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { storageUrl } from "@/utils/baseUrl";

type Props = {
  category:any;
}

const Advertisement = ({category}:Props) => {
  return (
    <div className="bg-[#ECEEF0] text-[#2E2E2E] pt-14 pb-20   font-rubik font-semibold text-2xl lg:text-3xl xl:text-[46px] md:px-[100px] px-8">
      EXPLORE COLLECTION
      <div className="sm:flex pt-14">
        <div className="w-full  lg:h-[665px] sm:h-[580px] h-[300px] relative">
          <Image
            src={storageUrl+category.at(0).image}
            fill
            alt="Men"
            className="sm:rounded-l-[20px] sm:rounded-tr-none rounded-t-[20px] sm:object-[-315px] object-[-50px] object-cover "
          />
          <div className="lg:text-[24px] text-lg absolute text-black p-9 font-rubik font-medium">
            FOR MEN
          </div>
          <div className="xl:text-[36px]  lg:text-3xl text-2xl font-rubik font-semibold absolute bottom-9 md:px-9 px-5  text-white w-full items-center flex justify-between">
            <h1 className="shrink-0 ">VIEW COLLECTION</h1>
            <div className="size-9 bg-white flex items-center justify-center rounded-md">
              <FiArrowUpRight className="text-black text-xl" />
            </div>
          </div>
        </div>
        <div className="w-full  lg:h-[665px] sm:h-[580px] h-[300px] relative">
          <Image
            src={storageUrl+category.at(1).image}
            fill
            alt="Women"
            className="sm:rounded-r-[20px] rounded-b-[20px] sm:rounded-bl-none md:object-[-1105px] sm:object-[-805px]  object-[-355px] object-cover "
          />
          <div className="lg:text-[24px] text-lg absolute text-black p-9 font-rubik font-medium">
            FOR WOMEN
          </div>{" "}
          <div className="xl:text-[36px] lg:text-3xl text-2xl font-rubik font-semibold absolute bottom-9 md:px-9 px-5 text-white w-full items-center flex justify-between">
            <h1 className="shrink-0">VIEW COLLECTION</h1>
            <div className="size-9 bg-white flex items-center justify-center rounded-md">
              <FiArrowUpRight className="text-black text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;

