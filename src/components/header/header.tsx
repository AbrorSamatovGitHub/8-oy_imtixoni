import React from "react";
import logo from "/public/icons/logo.svg";
import search from "/public/icons/search.svg";
import notify from "/public/icons/notify.svg";
import profile from "/public/icons/profile.svg";
import { Button } from "../ui/button";
import UzbIcon from "../../../public/icons/UzbIcon";
import FilterIcon from "../../../public/icons/FilterIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import UserIcon from "../../../public/icons/userIcon";
import SearchIcon from "../../../public/icons/searchIcon";
import Logo from "../../../public/icons/logo";
import RingIcon from "../../../public/icons/ringIcon";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="container py-5 flex justify-between items-center w-[100%] ">
      <div className="flex items-center w-[100%] gap-3  ">
        <div>
          <Logo />
        </div>
        <div className="w-[100%] relative hidden md:flex">
          <div className="flex w-full  items-center space-x-2">
            <div className="absolute left-5">
              <SearchIcon />
            </div>
            <Input
              className=" border-primary   pl-[40px]  h-[47px] w-[90%]"
              type="text"
              placeholder="Qidirish"
            />
            <Button className="  hover:bg-green-400 border-none  h-[47px] absolute right-[9%] flex gap-2">
              {" "}
              <FilterIcon />
              <span>Filter</span>{" "}
            </Button>
          </div>
        </div>
        <div className=" ml-[50px] sm:ml-[200px] md:ml-0 flex  justify-between gap-6 md:gap-10 items-center">
          <Select>
            <SelectTrigger className="h-[38px] w-[120px]">
              <SelectValue placeholder="Lenguage" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="uzb">
                  {" "}
                  <div className="flex items-center gap-2">
                    <img
                      width={38}
                      className="rounded-[5px]"
                      src="https://sokin.moy.su/_ph/170/76810354.gif"
                      alt=""
                    />{" "}
                    <span> Uzb</span>
                  </div>
                </SelectItem>
                <SelectItem value="Рус">
                  {" "}
                  <div className="flex items-center gap-2">
                    <img
                      width={38}
                      className="rounded-[5px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Russia.png/220px-Flag_of_Russia.png"
                      alt=""
                    />{" "}
                    <span>Рус</span>
                  </div>{" "}
                </SelectItem>
                <SelectItem value="English">
                  {" "}
                  <div className="flex items-center gap-2">
                    <img
                      width={38}
                      className="rounded-[5px]"
                      src="https://images.satu.kz/187452926_w640_h640_flag-britanii-1h2m.jpg"
                      alt=""
                    />{" "}
                    <span>English</span>
                  </div>{" "}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="hidden md:flex">
            <RingIcon />
          </div>
          <div className="flex  items-center">
            <Link className="hidden md:flex" href={"/user"}>
              <Button className="hidden bg-transparent  hover:bg-white md:flex gap-2  text-black">
                <p className="text-font16">Kirish</p>
              </Button>
            </Link>
            <div className="cursor-pointer">
              <UserIcon />
            </div>
          </div>
          <div className="md:hidden ">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
