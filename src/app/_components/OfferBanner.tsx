import React from "react";
import image from "../../../public/image/offer2.png";
import Image from "next/image";
import ProductCard from "./ProductCard";

const OfferBanner = () => {
  return (
    <>
    <div className="flex justify-center m-10">
    <div className="w-[1320px] h-[200px] relative ">
      <Image src={image} alt="" className=""/>
      <button className="absolute right-12 top-[75px] text-[#CC0033] h-[50px] w-32 bg-white rounded-[20px] hover:bg-black">SHOP NOW</button>
      </div>
    </div>

    <div className="grid grid-cols-4 mr-20 ml-24 pb-10 ">
        <ProductCard sale={true} rate={true}/>
        <ProductCard sale={true} rate={true}/>
        <ProductCard sale={true} rate={true}/>
        <ProductCard sale={true} rate={true}/>
    </div>
    </>
  );
};

export default OfferBanner;
