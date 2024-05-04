// "use client";
// import { NextPage } from "next";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import React from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const RegisterPage: NextPage = () => {
//   const router = useRouter();
//   const { register, handleSubmit, reset } = useForm();
//   const submit = (data: any) => {
//     axios.post("http://localhost:8000/register", data).then((res) => {
//       console.log(res);

//       router.push("/login");
//     });
//   };
//   return (
//     <div className="container  flex justify-center mt-10 ">
//       <div>
//         <Button className="hover:bg-green-400 mb-3" onClick={() => router.push("/login")}>login</Button>
//         <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3">
//           <div>
//             <Input
//               {...register("name")}
//               className="border-blue-400 border-2 "
//               placeholder="name"
//               type="text"
//             />
//           </div>
//           <div>
//             <Input
//               {...register("email")}
//               className="border-blue-400 border-2 "
//               placeholder="email"
//               type="text"
//             />
//           </div>
//           <div>
//             <Input
//               {...register("password")}
//               className="border-blue-400 border-2 "
//               placeholder="password"
//               type="password"
//             />
//           </div>
//           <Button className="hover:bg-green-400">send</Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";
import Link from "next/link";
import XIcon from "../../../../public/icons/XIcon";
import { Button } from "@/components/ui/button";

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submit = (data: any) => {
    axios.post("http://localhost:8000/register", data).then((res) => {
      console.log(res);

      router.push("/userLogin/login");
    });
  };
  return (
    <div className="w-[100%] h-screen flex  flex-col items-center justify-center  overflow-hidden bg-gradient-to-tl from-black via-zinc-100/60 to-black">
      <div className="w-[350px] sm:w-[499px] h-[620px]  shadow-2xl flex justify-center bg-[#ffffff] rounded-[5px]">
        <div className="container ">
          <form className="relative" onSubmit={handleSubmit(submit)}>
            <div>
              <Link href={"/"}>
                <div className="top-[-30px] right-1 absolute">
                  <XIcon />
                </div>
              </Link>
              <h2 className="text-[24px]  font-extrabold font-roboto text-[#0D1136] text-center mt-[50px]">
                Ro'yxatdan o'tish😎
              </h2>
              <p className="text-[14px] font-roboto font-normal text-[#0A0A0A] text-center mt-[24px]">
                Malumotlarni to`ldiring✌️✌️
              </p>
            </div>
            <div className="sm:w-[419px] sm:ml-[23px] mt-[28px]">
              <h3 className="text-[14px] font-semibold text-[#0A0A0A] font-roboto">
                Ismingizni kiriting 👇
              </h3>
              <input
                {...register("name")}
                className="w-full mt-[8px] h-[48px] p-[10px] bg-[#F6F8FA] outline-[#bbbec27e]"
                placeholder="ism"
                type="text"
              />
            </div>
            <div className="sm:w-[419px] sm:ml-[23px] mt-[24px]">
              <h3 className="text-[14px] font-semibold text-[#0A0A0A] font-roboto">
                Email pochta manzilini kiriting 👇
              </h3>
              <input
                {...register("email")}
                className="w-full mt-[8px] h-[48px] p-[10px] bg-[#F6F8FA] outline-[#bbbec27e]"
                placeholder="email"
                type="email"
              />
            </div>
            <div className="sm:w-[419px] sm:ml-[23px] mt-[24px]">
              <h3 className="text-[14px] font-semibold text-[#0A0A0A] font-roboto">
                Parolingizni kiriting 👇
              </h3>
              <input
                {...register("password")}
                className="w-full mt-[8px] h-[48px] p-[10px] bg-[#F6F8FA] outline-[#bbbec27e]"
                placeholder="parol"
                type="password"
              />
            </div>
            <div>
              <div className="w-full h-screen  justify-center mt-[32px]">
                <Button className="sm:w-[419px] w-full sm:ml-[23px] rounded-[6px] h-[48px] hover:bg-green-400 text-[16px] font-roboto font-semibold">
                  Ro'yxatdan o'tish
                </Button>
                <Link href={"/login"}>
                  <Button className=" text-[#000] hover:bg-primary w-full  sm:w-[419px] h-[48px] rounded-[6px] border border-[#000] sm:ml-[23px] mt-[24px] bg-[#1fba4b00] text-[16px] font-roboto font-semibold">
                    Kirish
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
