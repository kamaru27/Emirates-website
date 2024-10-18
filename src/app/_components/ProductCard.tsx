import Image from "next/image";
import React from "react";
import image from "../../../public/image/Rectangle_5-removebg-preview.png";

type Props = {
  sale?: boolean;
  rate?: boolean;
};

const ProductCard = ({ sale, rate }: Props) => {
  return (
    <div className="max-w-sm rounded-[28px] overflow-hidden shadow-lg border border-gray-200 bg-white relative w-[318px] h-[478px]">
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
          src={image}
          alt=""
          className="w-[302px] h-[334px] object-contain bg-slate-200 rounded-[24px]"
        ></Image>
      </div>

      {/* Product Info */}
      <div className="p-4 text-left">
        <h3 className="text-sm  text-gray-500 font-bold">Ray-Ban</h3>
        <p className="text-base text-black font-semibold">
          Ray-Ban RB 4287 6018G
        </p>
      </div>

      {/* Price Section */}
      <div className="bg-gray-900 text-white h-14  flex justify-center gap-3 items-center rounded-b-[28px]">
        <span className="text-lg font-bold">718.00 AED</span>
        {rate ? (
          <span className="text-gray-400 line-through text-sm">748.00 AED</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCard;
