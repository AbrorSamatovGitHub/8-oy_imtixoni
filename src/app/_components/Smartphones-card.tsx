// import React from "react";
// import { Button } from "@/components/ui/button";
// import bin from "/public/icons/bin.svg";
// import rating from "/public/icons/rating.svg";
// import Link from "next/link";
// import { SmartphonesType } from "@/types/Smartphones-type";

// export const SmartphonesCard: React.FC<SmartphonesType> = ({
//     img
// }) => {
//   return (
//     <div>
//       <img src={img} alt="img" />
    
//     </div>
//   );
// };

import React from "react";
import { Button } from "@/components/ui/button";
import bin from "/public/icons/bin.svg";
import rating from "/public/icons/rating.svg";
import Link from "next/link";
import { SmartphonesType } from "@/types/Smartphones-type";

export const SmartphonesCard: React.FC<SmartphonesType> = ({
  img,
  title,
  color,
  brand,
  price,
  id,
  description,
  discount,
  type
}) => {
  return (
    <div className="bg-white w-[290px] h-[443px] justify-between p-6 flex flex-col rounded-lg relative shadow-md mt-[50px] mb-[50px]">
      <img className="object-contain h-[262px]" src={img} alt="img" />
      {discount == '0' ? null : <div className="p-1 flex justify-center items-center bg-red-500 w-[45px] rounded-md absolute left-[7px]">{discount}</div> }
      <Link href={`/detail/${id}`} className="hover:text-primary text-md font-medium text-center">{title.length>25?title.slice(0,25)+"...":title}</Link>
      <div className="flex justify-between items-center">
        <img className="h-4" src={rating.src} alt="icon" />
        {/* <p className="text-gray-500 font-medium text-sm line-through">{oldcost} so'm </p> */}
      </div>
      <h4 className=" text-font18">{price} so'm</h4>
      <Button className=" hover:bg-green-400 flex gap-2">
        <img src={bin.src} alt="img" />
        Savatchaga
      </Button>
    </div>
  );
};
