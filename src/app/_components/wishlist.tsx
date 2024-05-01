import React from "react";
import { CardType } from "@/types/card-type";
import Link from "next/link";

export const WishlistCard: React.FC<CardType> = ({
  photo,
  title,
  cost,
  oldcost,
  id
}) => {
  return (
    <div className="bg-white w-[290px]  justify-between p-3 flex flex-col rounded-lg">
      <img className="object-contain h-[262px]" src={photo} alt="img" />
      <Link href={`/detail/${id}`} className="hover:text-primary text-md font-medium text-center">{title.length>25?title.slice(0,25)+"...":title}</Link>
      
    </div>
  );
};
