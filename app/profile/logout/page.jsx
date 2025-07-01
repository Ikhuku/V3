"use client"

import { useState } from "react"
import {
  Wifi,
  Briefcase,
  ShoppingBag,
  Clipboard,
  Heart,
  TrendingUp,
  CreditCard,
  MessageCircle,
  Bell,
  Settings,
  Sun,
  Moon,
  CheckCircle,
} from "lucide-react"

export default function AdminDashboardPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const generalMenuItems = [
    { icon: Briefcase, label: "Dashboard", href: "/admin/dashboard" },
    { icon: ShoppingBag, label: "Products", href: "/admin/products" },
    { icon: Clipboard, label: "Orders", href: "/admin/orders" },
    { icon: Heart, label: "Customer reviews", href: "/admin/reviews" },
    { icon: TrendingUp, label: "Product Statistics", href: "/admin/statistics" },
    { icon: CreditCard, label: "Payment", href: "/admin/payment" },
  ]

  const toolsMenuItems = [
    { icon: MessageCircle, label: "Messages", href: "/admin/messages" },
    { icon: Bell, label: "Notifications", href: "/admin/notifications" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ]

  const handleLogout = () => {
    console.log("Logout clicked")
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen bg-white md:hidden lg:hidden">
    

      <div className="px-6 pt-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Profile Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <img src="/image2.png" alt="Fredrick Mike" className="w-full h-full object-cover" />
          </div>

          {/* Name and Verification */}
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-xl font-bold text-black">Fredrick Mike</h1>
            <img src="/verifiedicon.png" className="w-5 h-5 text-blue-500 fill-current" />
          </div>

          {/* Email */}
          <p className="text-gray-600 text-sm mb-3">officialmicheal001@gmail.com</p>

          {/* Administrator Badge */}
          <div className="bg-red-500 text-white px-3 py-1 rounded text-xs font-medium">Administrator</div>
        </div>

        {/* General Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-black mb-4">General</h2>
          <div className="space-y-1">
            {generalMenuItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors duration-200 -mx-2 px-2 rounded-lg"
                >
                  <IconComponent className="w-5 h-5 text-gray-700" />
                  <span className="text-base">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-black mb-4">Tools</h2>
          <div className="space-y-1">
            {toolsMenuItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors duration-200 -mx-2 px-2 rounded-lg"
                >
                  <IconComponent className="w-5 h-5 text-gray-700" />
                  <span className="text-base">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Log out */}
          <button onClick={handleLogout} className="text-red-500 font-medium hover:text-red-600 transition-colors">
            Log out
          </button>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isDarkMode ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
