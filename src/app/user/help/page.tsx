import React from "react";

const Helppage = () => {
  return (
    <div className="rounded-xl  w-[1000px]  bg-white py-[50px] px-[74px] ">
      <h1 className="text-font22 mb-[22px]">F. A. Q</h1> 
      <ul className="flex flex-col gap-[10px]">
        <li className="shadow-md rounded-lg p-[30px] flex justify-between items-center cursor-pointer">
          <h1 className="text-font143 ">Ayirboshlash siyosati</h1>
          <h1 className="text-font242" >+</h1>
        </li>
        <li className="shadow-md rounded-lg p-[30px] flex justify-between items-center cursor-pointer">
          <h1 className="text-font143 ">Pulni qaytarish siyosati</h1>
          <h1 className="text-font242" >+</h1>
        </li>
        <li className="shadow-md rounded-lg p-[30px] flex justify-between items-center cursor-pointer">
          <h1 className="text-font143 ">Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash kerak?</h1>
          <h1 className="text-font242" >+</h1>
        </li>
        <li className="shadow-md rounded-lg p-[30px] flex justify-between items-center cursor-pointer">
          <h1 className="text-font143 ">Hisob qaydnomasini qanday yarataman?</h1>
          <h1 className="text-font242" >+</h1>
        </li>
      </ul>
    </div>
  );
};

export default Helppage;
