/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group"; 
// import Men from "../../../public/image/image 31.png"; 
// import Women from "../../../public/image/image 31 (1).png";
// import dolce from "../../../public/image/KYLIE.jpg";
// import prada from "../../../public/image/MAADAN.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { storageUrl } from "@/utils/baseUrl";

type Props = {
  brands:any
}

// const brands = [
//   { name: "POLICE", image: Men },
//   { name: "GUCCI", image: Women },
//   { name: "PRADA", image: prada },
//   { name: "DOLCE & GABBANA", image: dolce },
// ];

const ExploreBrands = (
  {brands}:Props

) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImages, setShowImages] = useState(true);

  const handleNext = () => {
    if (currentIndex + 2 < brands.length) {
      setShowImages(false); // Fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 2);
        setShowImages(true); // Fade in
      }, 200); // Match this timeout with the CSS transition duration
    }
  };

  const handlePrevious = () => {
    if (currentIndex - 2 >= 0) {
      setShowImages(false); // Fade out
      setTimeout(() => {
        setCurrentIndex((previousIndex) => previousIndex - 2);
        setShowImages(true); // Fade in
      }, 200); // Match this timeout with the CSS transition duration
    }
  };

  const currentImages = brands.slice(currentIndex, currentIndex + 2);

  return (
    <div className="pt-[50px] font-rubik font-semibold text-[46px] bg-[#B2181E] md:px-[100px] px-8">
      <div className="w-[1320px]">
      <div className="flex justify-between items-center">
        <span>TOP BRANDS</span>
        <div className="flex pr-2 text-black gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`bg-white size-10 flex justify-center items-center rounded-lg ${
              currentIndex === 0 ? "opacity-50" : "hover:bg-black/25"
            }`}
          >
            <div className="bg-white/30 size-9 flex justify-center items-center rounded-md ">
              <MdNavigateBefore className="text-black" />
            </div>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 2 >= brands.length}
            className={`bg-white size-10 flex justify-center items-center rounded-lg ${
              currentIndex + 2 >= brands.length
                ? "opacity-50"
                : "hover:bg-black/25"
            }`}
          >
            <div className="bg-white size-9 flex justify-center items-center rounded-md">
              <MdNavigateNext className="text-black" />
            </div>{" "}
          </button>
        </div>
      </div>
      </div>

      <div className="flex pt-10 relative">
        {currentImages.map((item:any, index:any) => {
          const globalIndex = currentIndex + index;
          const roundedClass =
            globalIndex % 2 === 0 ? "rounded-tl-[64px]" : "rounded-tr-[64px]";
          return (
            <CSSTransition
              key={index}
              in={showImages}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <div className="w-1/2 h-[600px] relative">
                <Image
                  src={
                    storageUrl+
                    item.image}
                  fill
                  alt={item.name}
                  className={`${roundedClass} object-cover transition-opacity duration-500`}
                />
                <div className="text-[36px] font-rubik font-semibold absolute bottom-8 px-10 text-white w-full flex justify-between">
                  <h1>{item.name}</h1>
                  <FiArrowUpRight className="size-12 p-2 text-black bg-white rounded-lg" />
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreBrands;

// import Image from "next/image";
// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import police from "../../../public/image/image 31.png";
// import gucci from "../../../public/image/image 31 (1).png";
// import { MdNavigateBefore } from "react-icons/md";
// import { MdNavigateNext } from "react-icons/md";

// const ExploreCollections = () => {
//   return (
//     <div className=" pt-14 px-28 bg-[#B2181E] font-rubik">
//       {/* Header */}
//       <div className="flex justify-between items-center  h-28">
//         <h2 className="text-5xl font-[600] text-white mb-10">TOP BRANDS</h2>
//         <div className="flex gap-4">
//           <div className="bg-white/30 size-9 flex justify-center items-center rounded-md mb-10">
//             <MdNavigateBefore className="text-black"/>
//           </div>
//           <div className="bg-white size-9 flex justify-center items-center rounded-md">
//             <MdNavigateNext className="text-black"/>
//           </div>
//         </div>
//       </div>
//       {/* Grid Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 ">
//         {/* Card for Men */}
//         <div className="relative rounded-tl-[48px]">
//           <Image
//             src={police}
//             alt="For Men"
//             className="w-full h-full object-cover rounded-tl-[48px] "
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-tl-[48px]">
//             <div className="flex items-center justify-between">
//               <span className="text-white text-[36px] font-[600] mb-4 ml-4">
//                 POLICE
//               </span>
//               <div className="size-9 bg-white flex items-center justify-center rounded-md">
//                 <FiArrowUpRight className="text-black text-xl" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card for Women */}
//         <div className="relative rounded-tr-[48px]">
//           <Image
//             src={gucci}
//             alt="For Women"
//             className="w-full h-full object-cover rounded-tr-[48px] "
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-tr-[48px]">
//             <div className="flex items-center justify-between">
//               <span className="text-white text-[36px] font-[600] mb-3 ml-4">
//                 GUCCI
//               </span>
//               <div className="size-9 bg-white flex items-center justify-center rounded-md">
//                 <FiArrowUpRight className="text-black text-xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreCollections;
