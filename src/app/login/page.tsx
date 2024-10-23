/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import image from "../../../public/image/Rectangle 21.png";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { userApi } from "../api/userApi";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

const mySchema = z.object({
  email: z.string().trim().nonempty({ message: "Email is required." }),
  password: z.string().min(5, { message: "Password min 8 is required." }),
});

type TMySchema = z.infer<typeof mySchema>;

const login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });
  const submitData = async (data: any) => {
    try {
      const response = await userApi.userLogin(data);
      if (response.data.success == true) {
        window.localStorage.setItem("accessToken", response.data.accessToken);
        Cookies.set("accessToken", response.data.accessToken);
        router.push("/");
        router.refresh();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex  bg-[#E7E7E3] justify-center m-auto">
        <div className="flex flex-col justify-center w-full max-w-[580px] p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>

          <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                placeholder="Email"
                {...register("email")}
              />{" "}
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div className="flex gap-1">
              <p className="text-black">Don&apos;t have an account?</p>
              <Link href={"/signUp"} className="text-blue-800">
                Sign Up
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors"
              disabled={isSubmitting}
            >
              Email Login
            </button>
          </form>
        </div>

        <div className="hidden sm:flex items-center justify-center p-8">
          <div className="text-center w-[701px] h-[508px]">
            <Image src={image} alt="Promotional Image" className="rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
