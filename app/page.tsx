import React, { Suspense } from 'react'
import ProductSkeleton from './components/product/ProductSkeleton';
import ProductSection from './components/product/ProductSection';

import { Metadata } from 'next';
import ProductGrid from './components/product/ProducGrid';
export const metadata: Metadata = {
  title: 'Aura Store – Modern E-commerce',
  description: 'Shop high-quality products with fast delivery in UAE.',
  openGraph: {
    title: 'Aura Store',
    description: 'Modern e-commerce for UAE shoppers',
    images: ['/og-home.png'],
  },
}

// open graph image should be 1200x630 px(og image will help to show preview when shared on social media to gives trust)
function HomePage() {
  return (
     <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Aura Store</h1>

      <Suspense fallback={<ProductSkeleton />}>
        <ProductGrid />
        
      </Suspense>
    </main>
  )
}


export default HomePage