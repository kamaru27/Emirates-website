import Image from "next/image";
import React from "react";
import logo from "../../../public/image/emiratesoptical-logo-2.png (1).png";
import logos from "../../../public/image/Frame 1430.png";

const Footer = () => {
  return (
    <div className="bg-[#E7E7E3]">
      <div className="bg-[#CC0033] h-64 mx-24 pt-10 pb-20 flex justify-between items-center rounded-t-[48px] text-white">
        <div className="text-7xl ml-12">
          <p className="font-rubik font-semibold">THE EYEWEAR</p>
          <p className="font-rubik font-semibold">YOU NEED</p>
        </div>
        <Image src={logo} alt="" className="h-32 mr-10" />
        {/* <LogoFooter/> */}
      </div>
      <div className="bg-[#232321] h-64 mx-24 mt-[-45px] pt-5 flex justify-between items-center rounded-t-[48px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Online Section */}
          <div className="col-span-1 ml-10 mt-10 mb-16">
            <h3 className="text-4xl font-semibold mb-4 font-rubik">Order Online</h3>
            <p className="text-base leading-6 font-sans">
              Find your perfect eyewear match at Emirates Optical Store&apos;s
              online platform. With a wide range of high-quality options from
              top brands, shopping for eyewear has never been easier. Shop now
              and elevate your style.
            </p>
          </div>

          {/* Categories Section */}
          <div className="flex justify-center gap-40 col-span-2 ml-10 mt-10 mb-16">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-rubik">Categories</h3>
              <div className="text-sm space-y-2 font-sans">
                <p>SUNGLASSES</p>
                <p>FRAMES</p>
                <p>OPHTHALMIC LENS</p>
                <p>CONTACT LENS</p>
              </div>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-rubik">Company</h3>
              <div className="text-sm space-y-2 font-sans">
                <p>About</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-rubik">Follow us</h3>
              <div className="flex space-x-4 text-lg">
                <Image src={logos} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
