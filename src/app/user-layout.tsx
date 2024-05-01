import React from 'react'
import { getCategory } from '@/service/data'
import { CategoryType } from '@/types/category'

export const  UserLayout:React.FC<CategoryType> = async({name,id}) => {
    const category=await getCategory()
  return (
    <div>
        {category.map((item:any)=>
        <h1 key={item.id}>{item.name}</h1>
        )}
    </div>
  )
}
