"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/image/emiratesoptical-logo-2.png.png";
import vector from "../../../public/image/Vector.png";
import profile from "../../../public/image/Vector (2).png";
import search from "../../../public/image/Vector (1).png";
import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from "@headlessui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";

const Header = () => {
  const router = useRouter();

  function logout() {
    Cookies.remove("accessToken");
    window.localStorage.removeItem("accessToken");
    router.refresh();
  }

  return (
    <div className="flex justify-center bg-[#E7E7E3] pt-10">
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
          <Menu>
            <MenuButton>
              <Image src={profile} alt="" className="size-5" />
            </MenuButton>
            <MenuItems
              anchor="bottom end"
              className={
                "bg-white mt-2 rounded-lg border border-black/10"
              }
            >
              {!window.localStorage.getItem("accessToken") &&
              !Cookies.get("accessToken") ? (
                <MenuItem>
                  <Link
                    className=" text-black flex gap-2 items-center py-2 px-5"
                    href="/login"
                  >
                    <CiLogin /> Login
                  </Link>
                </MenuItem>
              ) : (
                <>
                  <MenuItem>
                    <a
                      className=" text-black flex gap-2 items-center py-2 px-5"
                      href="/profileUpdate"
                    >
                      <FaUserEdit />
                      Profile Update
                    </a>
                  </MenuItem>
                  <MenuSeparator className="my-1 mx-2 h-px bg-black/15" />
                  <MenuItem>
                    <a
                      className=" text-black flex gap-2 items-center justify-center py-2 px-5"
                      onClick={logout}
                    >
                      <CiLogout />
                      Log Out
                    </a>
                  </MenuItem>
                </>
              )}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
