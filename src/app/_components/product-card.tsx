import React from "react";
import { CardType } from "@/types/card-type";
import { Button } from "@/components/ui/button";
import bin from "/public/icons/bin.svg";
import rating from "/public/icons/rating.svg";
import Link from "next/link";

export const ProductCard: React.FC<CardType> = ({
  photo,
  title,
  cost,
  oldcost,
  id
}) => {
  return (
    <div className="bg-white w-[290px] h-[443px] justify-between p-3 flex flex-col rounded-lg">
      <img className="object-contain h-[262px]" src={photo} alt="img" />
      <Link href={`/detail/${id}`} className="hover:text-primary text-md font-medium text-center">{title.length>25?title.slice(0,25)+"...":title}</Link>
      <div className="flex justify-between items-center">
        <img className="h-4" src={rating.src} alt="icon" />
        <p className="text-gray-500 font-medium text-sm line-through">{oldcost} so'm </p>
      </div>
      <h4 className=" text-font18">{cost} so'm</h4>
      <Button className=" hover:bg-green-400 flex gap-2">
        <img src={bin.src} alt="img" />
        Savatchaga
      </Button>
    </div>
  );
};
