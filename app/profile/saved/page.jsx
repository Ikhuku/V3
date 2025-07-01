"use client"

import { useState } from "react"
import { Wifi, ChevronLeft, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SavedItemsPage() {
  const router=  useRouter()
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
    },
    {
      id: 2,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
    },
    {
      id: 3,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
    },
    {
      id: 4,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
    },
    {
      id: 5,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
    },
  ])

  const handleRemoveItem = (itemId) => {
    setSavedItems(savedItems.filter((item) => item.id !== itemId))
    console.log("Remove item:", itemId)
  }

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`w-4 h-4 ${star <= rating ? "fill-black text-black" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white md:hidden lg:hidden">
    
      <div className="px-6 pt-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <ChevronLeft className="w-6 h-6 text-gray-700" onClick={()=>router.back()} />
          <div>
            <h1 className="text-xl font-bold text-black">Saved items</h1>
            <p className="text-gray-500 text-sm mt-1">View all your saved items all at one place</p>
          </div>
        </div>

        {/* Saved Items List */}
        <div className="space-y-4">
          {savedItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              {/* Product Image */}
              <div className="w-15 h-15 bg-gray-200 rounded-lg flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-black text-base mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{item.description}</p>
                <p className="font-semibold text-black text-sm mb-2">{item.price}</p>
                {renderStars(item.rating)}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 text-sm font-medium hover:text-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
