import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import police from "../../../public/image/image 31.png";
import gucci from "../../../public/image/image 31 (1).png";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const ExploreCollections = () => {
  return (
    <div className=" pt-14 px-28 bg-[#B2181E] font-rubik">
      {/* Header */}
      <div className="flex justify-between items-center  h-28">
        <h2 className="text-5xl font-[600] text-white mb-10">TOP BRANDS</h2>
        <div className="flex gap-4">
          <div className="bg-white/30 size-9 flex justify-center items-center rounded-md mb-10">
            <MdNavigateBefore className="text-black"/>
          </div>
          <div className="bg-white size-9 flex justify-center items-center rounded-md">
            <MdNavigateNext className="text-black"/>
          </div>
        </div>
      </div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Card for Men */}
        <div className="relative rounded-tl-[48px]">
          <Image
            src={police}
            alt="For Men"
            className="w-full h-full object-cover rounded-tl-[48px] "
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-tl-[48px]">
            <div className="flex items-center justify-between">
              <span className="text-white text-[36px] font-[600] mb-4 ml-4">
                POLICE
              </span>
              <div className="size-9 bg-white flex items-center justify-center rounded-md">
                <FiArrowUpRight className="text-black text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Card for Women */}
        <div className="relative rounded-tr-[48px]">
          <Image
            src={gucci}
            alt="For Women"
            className="w-full h-full object-cover rounded-tr-[48px] "
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-tr-[48px]">
            <div className="flex items-center justify-between">
              <span className="text-white text-[36px] font-[600] mb-3 ml-4">
                GUCCI
              </span>
              <div className="size-9 bg-white flex items-center justify-center rounded-md">
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
