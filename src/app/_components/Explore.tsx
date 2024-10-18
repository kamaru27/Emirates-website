import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import men from "../../../public/image/men.png";
import women from "../../../public/image/women.png";

const ExploreCollections = () => {
  return (
    <div className=" p-28 !pt-14 bg-gray-100 ">
      {/* Header */}
      <div className="flex justify-start items-center h-28 pb-5">
      <h2 className="text-5xl font-bold text-black mb-4 font-rubik">EXPLORE COLLECTIONS</h2>
      </div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Card for Men */}
        <div className="relative rounded-lt-lg rounded-lb-lg">
          <Image
            src={men}
            alt="For Men"
            className="w-full h-full object-cover rounded-l-[24px] "
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-l-[24px]">
            <span className="text-black text-2xl font-bold font-rubik ml-4 mt-4">FOR MEN</span>
            <div className="flex items-center justify-between">
              <span className="text-white text-[36px] font-bold font-rubik ml-4 mt-4">
                VIEW COLLECTION
              </span><div className="size-9 bg-white flex items-center justify-center rounded-md">
              <FiArrowUpRight className="text-black text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Card for Women */}
        <div className="relative rounded-r-[24px]">
          <Image
            src={women}
            alt="For Women"
            className="w-full h-full object-cover rounded-r-[24px] "
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-r-[24px]">
            <span className="text-black text-2xl font-bold font-rubik ml-4  mt-4">FOR WOMEN</span>
            <div className="flex items-center justify-between">
              <span className="text-white text-[36px] font-bold font-rubik ml-4">
                VIEW COLLECTION
              </span><div className="size-9 bg-white flex items-center justify-center rounded-md">
              <FiArrowUpRight className="text-black text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCollections;
