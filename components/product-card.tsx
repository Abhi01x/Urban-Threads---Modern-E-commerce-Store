"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: number
  image1: string
  image2: string
  category: string
}

export function ProductCard({ name, price, image1, image2, category }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden">
      <div
        className="relative aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? image2 : image1}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-2 right-2 bg-dark-900 px-2 py-1 rounded text-xs font-medium">{category}</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
        <p className="text-gray-400 mb-4">${price.toFixed(2)}</p>
        <Button className="w-full" variant="outline">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

