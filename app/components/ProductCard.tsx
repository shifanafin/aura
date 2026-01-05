import React from 'react'
type productCardProps = {title:string,price:number,imageUrl:string}


const ProductCard = ({ title, price }: productCardProps) => {
  return (
    <div className="bg-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-amber-500">
        {title}
      </h2>
      <p className="text-gray-300">
        Price: ${price}
      </p>
    </div>
  )
}
export default ProductCard