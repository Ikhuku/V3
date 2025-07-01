"use client"

import { useState } from "react"
import { Wifi, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
    const router=  useRouter()
  const [notifications, setNotifications] = useState({
    mobilePush: true,
    desktop: false,
    email: true,
  })

  const handleToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  return (
    <div className="min-h-screen bg-white md:hidden lg:hidden">
     

      <div className="px-6 pt-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <ChevronLeft className="w-6 h-6 text-gray-700" onClick={()=>router.back()}/>
          <div>
            <h1 className="text-xl font-bold text-black">Settings</h1>
            <p className="text-gray-500 text-sm mt-1">Manage all your settings here.</p>
          </div>
        </div>

        {/* Notify me when section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">Notify me when</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">Daily productivity update</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">When new feature is added</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-600 text-sm">Promotional updates</span>
            </div>
          </div>
        </div>

        {/* Mobile push notifications */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-black">Mobile push notifications</h3>
            <button
              onClick={() => handleToggle("mobilePush")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.mobilePush ? "bg-black" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.mobilePush ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Receive push notification whenever your organization requires your attentions
          </p>
        </div>

        {/* Desktop Notification */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-black">Desktop Notification</h3>
            <button
              onClick={() => handleToggle("desktop")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.desktop ? "bg-black" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.desktop ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Receive desktop notification whenever your organization requires your attentions
          </p>
        </div>

        {/* Email Notification */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-black">Email Notification</h3>
            <button
              onClick={() => handleToggle("email")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.email ? "bg-black" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.email ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Receive email notification whenever your organization requires your attentions
          </p>
        </div>

        {/* Change Password */}
        <div>
          <h3 className="text-base font-semibold text-black mb-2">Change Password</h3>
          <p className="text-gray-500 text-sm">
            Forgot password? Click <button className="text-blue-500 font-medium underline">HERE</button>
          </p>
        </div>
      </div>
    </div>
  )
}
