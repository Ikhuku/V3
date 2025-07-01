"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OrdersPage() {
    const router=  useRouter()
  const [activeTab, setActiveTab] = useState("ongoing")

  const orders = [
    {
      id: 1,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
      status: "ongoing",
    },
    {
      id: 2,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
      status: "ongoing",
    },
    {
      id: 3,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
      status: "ongoing",
    },
    {
      id: 4,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
      status: "ongoing",
    },
    {
      id: 5,
      name: "Candle Mandarin.",
      description: "Color fragrance: Orange",
      price: "NGN 150,000",
      image: "/orders-image.png",
      rating: 3,
      status: "ongoing",
    },
  ]

  const handleCancelOrder = (orderId) => {
    console.log("Cancel order:", orderId)
  }

  const handleTrackOrder = () => {
    console.log("Track order")
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
          <  ChevronLeft className="w-6 h-6 text-gray-700" onClick={()=>router.back()}/>
          <div>
            <h1 className="text-xl font-bold text-black">Orders</h1>
            <p className="text-gray-500 text-sm mt-1">Have access to all your order history and past purchases</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`flex-1 pb-2 text-sm font-medium border-b-2 ${
              activeTab === "ongoing" ? "text-green-600 border-green-600" : "text-gray-400 border-transparent"
            }`}
          >
            Ongoing/Delivered
          </button>
          <button
            onClick={() => setActiveTab("cancelled")}
            className={`flex-1 pb-2 text-sm font-medium border-b-2 ${
              activeTab === "cancelled" ? "text-green-600 border-green-600" : "text-gray-400 border-transparent"
            }`}
          >
            Cancelled/Returned
          </button>
        </div>

        {/* Orders List */}
        <div className="space-y-4 mb-6">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              {/* Product Image */}
              <div className="w-15 h-15 bg-gray-200 rounded-lg flex-shrink-0">
                <img
                  src={order.image || "/placeholder.svg"}
                  alt={order.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-black text-base mb-1">{order.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{order.description}</p>
                <p className="font-semibold text-black text-sm mb-2">{order.price}</p>
                {renderStars(order.rating)}
              </div>

              {/* Cancel Button */}
              <button onClick={() => handleCancelOrder(order.id)} className="text-red-500 text-sm font-medium">
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Track Order Button */}
      <div className="px-6 pb-6">
        <Button
          onClick={handleTrackOrder}
          className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg text-base"
        >
          Track your order
        </Button>
      </div>
    </div>
  )
}
