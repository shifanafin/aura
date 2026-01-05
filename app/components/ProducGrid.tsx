import React from 'react'
import ProductCard from './ProductCard'
import { fetchProducts } from '../lib/api/product';

const ProducGrid = async () => {



  const data = await fetchProducts();

  return (
    <div>
      {data?.map((product: any) => (
        <ProductCard 
          key={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.image}
        />
      ))}
    
      </div>

  )
}

export default ProducGrid