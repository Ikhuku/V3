"use client"

import { useState } from "react"
import { Wifi, ChevronLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function FollowedSellersPage() {
    const router = useRouter()
  const [followedSellers, setFollowedSellers] = useState([
    {
      id: 1,
      name: "Brandulox",
      category: "Clothing & Footwear",
      isVerified: true,
      avatar: "/image1.png",
    },
    {
      id: 2,
      name: "Brandulox",
      category: "Clothing & Footwear",
      isVerified: true,
      avatar: "/image2.png",
    },
    {
      id: 3,
      name: "Brandulox",
      category: "Clothing & Footwear",
      isVerified: true,
      avatar: "/image2.png",
    },
    {
      id: 4,
      name: "Brandulox",
      category: "Clothing & Footwear",
      isVerified: true,
      avatar: "/image3.png",
    },
    {
      id: 5,
      name: "Brandulox",
      category: "Clothing & Footwear",
      isVerified: true,
      avatar: "/image4.png",
    },
    {
      id: 6,
      name: "Brandulox",
      category: "Clothing & Footwear",
      isVerified: true,
      avatar: "/image5.png",
    },
    {
      id: 7,
      name: "Brandulox",
      category: "Clothing & Footwear",
      isVerified: true,
      avatar: "/image6.png",
    },
  ])

  const handleViewProducts = (sellerId) => {
    console.log("View products for seller:", sellerId)
  }

  const handleUnfollow = (sellerId) => {
    setFollowedSellers(followedSellers.filter((seller) => seller.id !== sellerId))
    console.log("Unfollow seller:", sellerId)
  }

  return (
    <div className="min-h-screen bg-white md:hidden lg:hidden">
     

      <div className="px-6 pt-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <ChevronLeft className="w-6 h-6 text-gray-700" onClick={()=>router.back()}/>
          <div>
            <h1 className="text-xl font-bold text-black">Followed Sellers</h1>
            <p className="text-gray-500 text-sm mt-1">View all your favorite sellers all at one place</p>
          </div>
        </div>

        {/* Sellers List */}
        <div className="space-y-4">
          {followedSellers.map((seller) => (
            <div key={seller.id} className="flex items-center gap-4 p-4 bg-white">
              {/* Seller Avatar */}
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={seller.avatar || "/placeholder.svg"}
                  alt={seller.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Seller Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-black text-base">{seller.name}</h3>
                  {seller.isVerified && <img src="/verifiedicon.png" className="w-4 h-4 text-blue-500 fill-current" />}
                </div>
                <p className="text-gray-600 text-sm mb-1">{seller.category}</p>
                <p className="text-gray-400 text-xs">Verified seller</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-end gap-2">
                <Button
                  onClick={() => handleViewProducts(seller.id)}
                  variant="ghost"
                  className="text-black text-sm font-medium hover:bg-gray-100 h-auto p-1"
                >
                  View products
                </Button>
                <button
                  onClick={() => handleUnfollow(seller.id)}
                  className="text-red-500 text-sm font-medium hover:text-red-600 transition-colors"
                >
                  Unfollow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
