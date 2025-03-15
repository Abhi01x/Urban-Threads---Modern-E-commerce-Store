"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"

export function CartIcon() {
  const [isClicked, setIsClicked] = useState(false)
  const [itemCount, setItemCount] = useState(0)

  const handleClick = () => {
    setIsClicked(true)
    // For demo purposes, increment the cart count when clicked
    setItemCount((prev) => prev + 1)
    setTimeout(() => setIsClicked(false), 300) // Reset after animation
  }

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full bg-dark-400 hover:bg-dark-300 transition-colors duration-200 relative ${
        isClicked ? "animate-click" : ""
      }`}
    >
      <ShoppingCart className="w-6 h-6 text-gray-100" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-white text-dark-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  )
}

