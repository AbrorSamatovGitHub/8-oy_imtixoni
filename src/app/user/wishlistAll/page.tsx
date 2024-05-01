import { ProductCard } from '@/app/_components/product-card'
import { getProducts } from '@/service/data';
import React from 'react'

const WishlistAllpage = async () => {
    const products = await getProducts();

  return (
    <div>
      <div className=" flex justify-center flex-col items-center   sm:gap-3 md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-2 lg:gap-3 xl:grid xl:grid-cols-3 xl:gap-3  ">
            {products.map((item: any) => (
              <div>
                <ProductCard key={item.id} {...item} />
              </div>
            ))}
          </div>
    </div>
  )
}

export default WishlistAllpage
