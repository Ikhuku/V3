"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wifi, Eye, EyeOff } from "lucide-react"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sign in submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white md:hidden lg:hidden">
     

      <div className="px-6 pt-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
           <div><img src="/Whatsapp-image.png" alt="" /></div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">Welcome back!</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fill out your information below or register with your social accounts.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Password */}
          <div>
            <label className="block text-black font-medium mb-3">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-blue-500 text-sm font-medium">
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-base"
          >
            Sign in
          </Button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <p className="text-center text-gray-500 text-sm mb-6">or Sign in with</p>

          <div className="space-y-3">
            {/* Google */}
            <Button
              variant="outline"
              className="w-full h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 bg-transparent"
            >
           <div><img src="/Group-756.png" alt="" /></div>
            </Button>

            {/* Apple */}
            <Button
              variant="outline"
              className="w-full h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 bg-transparent"
            >
             <div><img src="/Vector.png" alt="" /></div>
            </Button>

            {/* Facebook */}
            <Button
              variant="outline"
              className="w-full h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 bg-transparent"
            >
              <div><img src="/f.png" alt="" /></div>
            </Button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8 pb-8">
          <p className="text-gray-600 text-sm">
            Don't have an account ? <button className="text-black font-medium underline">Sign up</button>
          </p>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}
