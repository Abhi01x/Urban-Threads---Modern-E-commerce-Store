"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { CategoryFilter } from "@/components/category-filter"
import { CartIcon } from "@/components/cart-icon"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Premium Black T-Shirt",
      price: 49.99,
      category: "T-Shirt",
      image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
      image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 79.99,
      category: "Pants",
      image1: "https://i.pinimg.com/originals/e8/0a/0c/e80a0c4f562a942c01f6060dda1cb845.jpg",
      image2: "https://i.pinimg.com/originals/19/3f/88/193f88f97d9cf5f5389a7d3a5d9544d0.jpg",
    },
    {
      id: 3,
      name: "Oversized Hoodie",
      price: 89.99,
      category: "Hoodie",
      image1: "https://i.pinimg.com/originals/a0/6d/41/a06d41c55e3241c3a5961f97dbccf5f4.jpg",
      image2: "https://i.pinimg.com/originals/a8/b7/76/a8b776e2a732e1a856a88dbe4d7f63b7.jpg",
    },
    {
      id: 4,
      name: "Cargo Pants",
      price: 69.99,
      category: "Pants",
      image1: "https://i.pinimg.com/originals/e1/0a/34/e10a34c7cb8b64b1c2c3d53c4cfe5ea3.jpg",
      image2: "https://i.pinimg.com/originals/8a/1a/0f/8a1a0f9c4b1df1e7e6b0e2e9e5f8e8f7.jpg",
    },
    {
      id: 5,
      name: "Graphic Print T-Shirt",
      price: 54.99,
      category: "T-Shirt",
      image1: "https://i.pinimg.com/originals/c5/d5/c5/c5d5c5e8d5f5d5c5d5c5d5c5d5c5d5c5.jpg",
      image2: "https://i.pinimg.com/originals/d6/d6/d6/d6d6d6e6e6e6e6e6e6e6e6e6e6e6e6e6.jpg",
    },
    {
      id: 6,
      name: "Denim Jacket",
      price: 119.99,
      category: "Outerwear",
      image1: "https://i.pinimg.com/originals/f7/f7/f7/f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7.jpg",
      image2: "https://i.pinimg.com/originals/e8/e8/e8/e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8.jpg",
    },
    {
      id: 7,
      name: "Track Pants",
      price: 59.99,
      category: "Pants",
      image1: "https://i.pinimg.com/originals/a9/a9/a9/a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9.jpg",
      image2: "https://i.pinimg.com/originals/b0/b0/b0/b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0.jpg",
    },
    {
      id: 8,
      name: "Bomber Jacket",
      price: 129.99,
      category: "Outerwear",
      image1: "https://i.pinimg.com/originals/c1/c1/c1/c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1.jpg",
      image2: "https://i.pinimg.com/originals/d2/d2/d2/d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2.jpg",
    },
  ]

  const [filteredCategory, setFilteredCategory] = useState<string | null>(null)
  
  // Extract unique categories
  const categories = Array.from(new Set(products.map(product => product.category)))
  
  // Filter products based on selected category
  const filteredProducts = filteredCategory 
    ? products.filter(product => product.category === filteredCategory)
    : products

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Fixed Cart Icon */}
      <div className="fixed top-4 right-4 z-50">
        <CartIcon />
      </div>

      {/* Product Section */}
      <section id="product-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
          
          {/* Category Filter */}
          <CategoryFilter 
            categories={categories} 
            onFilterChange={setFilteredCategory} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

