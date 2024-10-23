/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
// import image from "../../../public/image/Rectangle_5-removebg-preview.png";
import { storageUrl } from "@/utils/baseUrl";

type Props = {
  sale?: boolean;
  rate?: boolean;
  brand: string;
  name: string;
  price: string;
  offerPrice?: string;
  image: string;
};

const ProductCard = ({
  sale,
  brand,
  name,
  price,
  offerPrice,
  image,
}: Props) => {
  return (
    <div className="max-w-sm rounded-[28px] overflow-hidden shadow-lg border border-gray-200 bg-white relative w-[318px] h-[478px] group font-rubik">
      {/* Sale Badge */}
      {sale ? (
        <div className="absolute top-2 left-2 bg-red-800 text-white text-xs font-semibold px-4 py-3 rounded-tl-[24px] rounded-br-[24px]">
          Sale
        </div>
      ) : (
        ""
      )}

      {/* Product Image */}
      <div className="flex justify-center m-2">
        <Image
          src={storageUrl + image}
          alt=""
          width={302}
          height={334}
          className=" object-contain bg-slate-200 rounded-[24px]"
        ></Image>
        {/* View Product Button */}
        <div className="absolute flex justify-center bottom-36 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-black py-2 px-4 rounded-full text-sm">
            👁 View Product
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-left">
        <h3 className="text-sm  text-gray-500 font-bold">{brand}</h3>
        <p className="text-base text-black font-semibold">{name}</p>
      </div>

      {/* Price Section */}
      <div className="bg-gray-900 text-white h-14  flex justify-center gap-3 items-center rounded-b-[28px]">
        {offerPrice ? (
          <>
            <span className="text-lg font-bold">${offerPrice}</span>
            <span className="text-gray-400 line-through text-sm">${price}</span>
          </>
        ) : (
          <span className="text-lg font-bold">${price}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
