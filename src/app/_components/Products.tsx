import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="w-full">
      <div className="">
        <div className="flex justify-between mx-24 mt-5 h-28 items-center">
        <p className="text-black text-5xl font-semibold font-rubik">PRODUCTS</p>
        <button className="text-[#CC0033] h-[45px] w-32 bg-white rounded-[20px] hover:bg-black font-rubik font-medium">VIEW ALL</button>
        </div>

        <div className="grid grid-cols-4 mr-20 ml-24 pb-10 ">
          <ProductCard sale={true} rate={true} />
          <ProductCard sale={true} rate={true} />
          <ProductCard sale={true} rate={true} />
          <ProductCard sale={true} rate={true} />
        </div>
      </div>
      <div>
      <div className="">
        <div className="flex justify-between mx-24 mb-5 h-28 items-center">
        <p className="text-black text-5xl font-semibold font-rubik">LENS</p>
        <button className="text-[#CC0033] h-[45px] w-32 bg-white rounded-[20px] hover:bg-black font-rubik font-medium">VIEW ALL</button>
        </div>
        </div>

        <div className="grid grid-cols-4 mr-20 ml-24 pb-10 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Product;
