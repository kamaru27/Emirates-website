/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import image from "../../../public/image/Offerbanner1.png.jpg";
import ProductCard from "./ProductCard";

type Props = {
  products: any;
};

const FeaturedProducts = ({ products }: Props) => {
  return (
    <div className=" md:px-[70px] px-8  pb-12 w-full flex flex-col items-center pt-10">
      <div className="relative h-32  sm:h-[200px] w-[1320px]">
        <Image
          src={image}
          fill
          alt="Ad"
          className="object-cover  rounded-[20px] object-top-[]"
        />
        <div className="font-rubik font-semibold md:flex-row flex flex-col gap-2 sm:px-[50px] shrink-0 md:justify-between text-center justify-center text-[28px]  w-full h-full sm:text-4xl lg:text-[60px] items-center text-white absolute xl:text-[74px]">
          <div> BUY 1 GET 1 FREE</div>

          <button className="text-[#CC0033] sm:text-base text-sm font-rubik font-medium xl:py-3 rounded-[20px] hover:bg-black lg:px-7 lg:py-2 px-5 py-1  bg-white xl:px-[30px]">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="grid   gap-4 pt-8 md:grid-cols-2 xl:grid-cols-4 w-[1320px]">
        {products.map(((item:any, index:any) =>(
            <div key={index}>
              <ProductCard sale={true} brand={item.brand} name={item.name} price={item.price} offerPrice={item.offerPrice} image={item.image} />
            </div>
          )))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
