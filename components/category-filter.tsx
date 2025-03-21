"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  onFilterChange: (category: string | null) => void
}

export function CategoryFilter({ categories, onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null)
      onFilterChange(null)
    } else {
      setActiveCategory(category)
      onFilterChange(category)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      <Button
        variant={activeCategory === null ? "default" : "outline"}
        onClick={() => {
          setActiveCategory(null)
          onFilterChange(null)
        }}
        className="text-sm"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => handleCategoryClick(category)}
          className="text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

