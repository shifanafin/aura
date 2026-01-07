  import { fetchProducts } from '@/lib/api/product'
import ProductSection from './ProductSection'

  export default async function ProductGrid() {
    const data = await fetchProducts()


    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         
          <ProductSection products={data} />
        </div>

      
      </>
    )
  }
