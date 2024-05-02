import { getCategory } from "@/service/data";
import Link from "next/link";
import React from "react";
import LinkIcon from "../../../../public/icons/linkIcon";
import RightArrow from "../../../../public/icons/rightArrow";

const MobilCategoryPage = async () => {
  const category = await getCategory();

  return (
    <div className="container">
        <div className="flex  items-center gap-5">
          <div className="transform rotate-180">
            <RightArrow />
          </div>
          <h1 className="text-font24">Category</h1>
        </div>
      <div className="flex flex-col gap-3 p-3 ">
        {category.map((item: any) => (
          <div
            className=" flex gap-4  w-[200px] justify-between items-center "
            key={item.id}
          >
            <Link href={`/${item.title}`}>
              <div className="flex flex-col items-center">
                <h2 className=" md:text-font12 text-font14 text-lg hover:cursor-pointer hover:text-primary">
                  {item.title}
                </h2>
              </div>
            </Link>
            <div className="">
              <LinkIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilCategoryPage;
