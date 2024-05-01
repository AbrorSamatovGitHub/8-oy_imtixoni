import { ProductCard } from "@/app/_components/product-card";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/service/data";
import React from "react";
import PlasIcon from "../../../../public/icons/PlasIcon";
import Link from "next/link";
import RightArrow from "../../../../public/icons/rightArrow";
import { WishlistCard } from "@/app/_components/wishlist";

const QurulmaPage = async () => {
  const products = await getProducts();

  return (
    <div className="rounded-xl pt-8 pl-6 w-[1000px] pb-[140px] bg-white ">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-font22 mb-[22px]">Sizning qurilmalaringiz</h1>
          <div>
            <Link href={"/user/wishlistPlas"}>
              {" "}
              <Button className="text-green-500 flex   bg-white hover:bg-white  gap-1   items-center justify-center ">
                <PlasIcon /> Manzil qo’shish{" "}
              </Button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center flex-col items-center   sm:gap-3 md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-2 lg:gap-3 xl:grid xl:grid-cols-3 xl:gap-3 overflow-y-scroll  ">
          {products.slice(3, 6).map((item: any) => (
            <div>
              <WishlistCard key={item.id} photo={item.photo} title={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[56px]">
        <div className="flex justify-between items-center">
          <h1 className="text-font22 mb-[22px]">
            Sizning qurilmalaringiz uchun mahsulotlar
          </h1>{" "}
          <div>
            <Link href={"/user/wishlistAll"}>
              {" "}
              <Button className="text-green-500 flex   bg-white hover:bg-white  gap-2   items-center justify-center ">
                Barchasi <RightArrow />
              </Button>
            </Link>
          </div>
        </div>

        <div className=" flex justify-center flex-col items-center   sm:gap-3 md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-2 lg:gap-3 xl:grid xl:grid-cols-3 xl:gap-3 overflow-y-scroll  ">
          {products.slice(16, 19).map((item: any) => (
            <div>
              <ProductCard key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QurulmaPage;
