"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wifi, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MyAccountPage() {
    const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    residentialAddress: "",
    state: "",
    region: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Account updated:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
     <div>
        <img src="/Whatsapp-image.png" alt="" />
     </div>

      <div className="px-6 pt-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <ChevronLeft className="w-6 h-6 text-gray-700" onClick={()=>router.back()}/>
          <div>
            <h1 className="text-xl font-bold text-black">My Account</h1>
            <p className="text-gray-500 text-sm mt-1">
              Provide us with your contact informations and billing addresses
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-black font-medium mb-3">Full name</label>
            <Input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-black font-medium mb-3">Email Address</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-black font-medium mb-3">Phone Number</label>
            <Input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Residential Address */}
          <div>
            <label className="block text-black font-medium mb-3">Residential Address</label>
            <Input
              type="text"
              value={formData.residentialAddress}
              onChange={(e) => handleInputChange("residentialAddress", e.target.value)}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-black font-medium mb-3">State</label>
            <Input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Region */}
          <div>
            <label className="block text-black font-medium mb-3">Region</label>
            <Input
              type="text"
              value={formData.region}
              onChange={(e) => handleInputChange("region", e.target.value)}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Account Credit Section */}
          <div className="pt-6">
            <h2 className="text-lg font-bold text-black mb-3">Account credit</h2>
            <p className="text-gray-600 text-sm mb-2">
              To add credit to your store balance click{" "}
              <button type="button" className="text-blue-500 font-medium underline">
                HERE
              </button>
              .
            </p>
            <p className="text-green-600 font-medium">Store credit balance: 0</p>
          </div>

          {/* Save Button */}
          <div className="pt-6 pb-8">
            <Button
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-base"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
