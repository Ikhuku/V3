"use client"

import { Wifi, ChevronLeft, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ReviewsPage() {
    const router=  useRouter()
  const products = [
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
  ]

  const handleWriteReview = (productId) => {
    console.log("Write review for product:", productId)
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
          <ChevronLeft className="w-6 h-6 text-gray-700" onClick={()=>router.back()}/>
          <div>
            <h1 className="text-xl font-bold text-black">Reviews</h1>
            <p className="text-gray-500 text-sm mt-1">Your feedback is highly appreciated</p>
          </div>
        </div>

        {/* Products List */}
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="flex items-start gap-4">
              {/* Product Image */}
              <div className="w-15 h-15 bg-gray-200 rounded-lg flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-black text-base mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{product.description}</p>
                <p className="font-semibold text-black text-sm mb-3">{product.price}</p>

                {/* Star Rating */}
                <div className="mb-3">{renderStars(product.rating)}</div>

                {/* Write Review Link */}
                <button
                  onClick={() => handleWriteReview(product.id)}
                  className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
                >
                  Write a review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
