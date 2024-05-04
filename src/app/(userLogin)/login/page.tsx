"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import XIcon from "../../../../public/icons/XIcon";

const LoginPage: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const data = useSession();

  const submit = (data: any) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div className="w-[100%] h-screen flex  flex-col items-center justify-center  overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="w-[350px] sm:w-[499px] h-[550px] mt-[0px] shadow-2xl flex justify-center bg-[#ffffff] rounded-[5px]">
          <div className="container ">
            <form className="relative" onSubmit={handleSubmit(submit)}>
              <div>
                <Link href={"/"}>
                  <div className="top-[-30px] right-1 absolute">
                    <XIcon />
                  </div>
                </Link>
                <h2 className=" text-[24px] font-extrabold font-roboto  text-center mt-[50px]">
                  Kirish
                </h2>
                <p className="text-[14px] font-roboto font-normal text-[#0A0A0A] text-center mt-[24px]">
                  Malumotlarni to`ldiring✌️✌️
                </p>
              </div>

              <div className="sm:w-[419px] ml-[20px] mt-[24px]">
                <h3 className="text-[14px] font-semibold text-[#0A0A0A] font-roboto">
                  Telefon raqam yoki Elektron pochta
                </h3>
                <input
                  {...register("email")}
                  className="w-full mt-[8px] h-[48px] p-[10px] bg-[#F6F8FA] outline-[#bbbec27e]"
                  placeholder="email"
                  type="email"
                />
              </div>
              <div className="sm:w-[419px] ml-[20px] mt-[24px]">
                <h3 className="text-[14px] font-semibold text-[#0A0A0A] font-roboto">
                  Parolni kiriting
                </h3>
                <input
                  {...register("password")}
                  className="w-full mt-[8px] h-[48px] p-[10px] bg-[#F6F8FA] outline-[#bbbec27e]"
                  placeholder="parol"
                  type="password"
                />
              </div>
              <div className="w-full h-screen  justify-center mt-[32px]">
                <button className="w-full sm:w-[419px] ml-[24px] rounded-[6px] h-[48px] bg-[#1FBA4A] text-[16px] text-[#FFFFFF] font-roboto font-semibold">
                  Kirish
                </button>
                <div>
                  <div>
                    <div>
                      {data.status === "authenticated" ? (
                        <Link href={"/profile"}>
                          <div>
                            <button className=" text-[#1FBA4A] w-full sm:w-[419px] h-[48px] rounded-[6px] border border-[#1FBA4A] ml-[20px] mt-[24px]  text-[16px] font-roboto font-semibold">
                              Saytga kirish
                            </button>
                          </div>
                        </Link>
                      ) : (
                        <Link href={"/register"}>
                          <button className=" text-[#000] w-full sm:w-[419px] h-[48px] rounded-[6px] border border-[#000] ml-[24px] mt-[24px] bg-[#1fba4b00] text-[16px] font-roboto font-semibold">
                            Ro‘yxatdan o‘tish
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
