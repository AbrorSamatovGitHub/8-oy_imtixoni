import React from 'react'
import { getProducts } from '@/service/data'


const DetailPage =async () => {
    const products=await getProducts()

    
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage