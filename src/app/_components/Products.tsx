/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "./ProductCard";

type Props = {
  offerProducts: any;
  subCategoryProducts: any;
};

const Product = ({ offerProducts, subCategoryProducts }: Props) => {
  return (
    <div className="w-full">
      <div className="">
        <div className="flex justify-between mx-24 mt-5 h-28 items-center">
          <p className="text-black text-5xl font-semibold font-rubik">
            PRODUCTS
          </p>
          <button className="text-[#CC0033] h-[45px] w-32 bg-white rounded-[20px] hover:bg-black font-rubik font-medium">
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-4 mr-20 ml-24 pb-10 ">
          {offerProducts.map((item:any, i:any) => (
            <div key={i}>
              <ProductCard sale={true} rate={true} brand={item.brandName} name={item.name} price={item.price} offerPrice={item.offerPrice} image={item.image} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="">
          <div className="flex justify-between mx-24 mb-5 h-28 items-center">
            <p className="text-black text-5xl font-semibold font-rubik">LENS</p>
            <button className="text-[#CC0033] h-[45px] w-32 bg-white rounded-[20px] hover:bg-black font-rubik font-medium">
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 mr-20 ml-24 pb-10 ">
        {subCategoryProducts.map((item:any, i:any) => (
            <div key={i}>
              <ProductCard sale={true} rate={true} brand={item.name} name={item.name} price={item.price} offerPrice={item.offerPrice} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
