import Image from "next/image";
import React from "react";
import logo from "../../../public/image/emiratesoptical-logo-2.png.png";
import vector from "../../../public/image/Vector.png";
import profile from "../../../public/image/Vector (2).png";
import search from "../../../public/image/Vector (1).png";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="h-28 mx-10 bg-[#F2F2F2] w-[1320px] flex justify-between px-10 rounded-[20px] items-center">
        <div className="h-30">
          <Image src={logo} alt="" />
        </div>
        <div className="flex text-[#2E2E2E] gap-5">
          <div className="flex items-center gap-1">
            <p className="">Products</p>
            <div>
              <Image src={vector} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="">Services</p>
            <div>
              <Image src={vector} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="">Brands</p>
            <div>
              <Image src={vector} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="">Awards</p>
            <div>
              <Image src={vector} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="">About us</p>
            <div>
              <Image src={vector} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="">Stores</p>
            <div>
              <Image src={vector} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <Image src={search} alt="" className="size-5" />
          <Image src={profile} alt="" className="size-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
