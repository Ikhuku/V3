"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wifi } from "lucide-react"

export default function PasswordResetPage() {
    const [code, setCode] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Verification code submitted:", code)
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
                    <h1 className="text-2xl font-bold text-black mb-3">Password reset</h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We sent the code to <span className="font-medium text-black">officialmicheal001@gmail.com</span>
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Code Input */}
                    <div>
                        <label className="block text-black font-medium mb-3">Code</label>
                        <Input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder=""
                            maxLength={6}
                        />
                    </div>

                    {/* Proceed Button */}
                    <Button
                        type="submit"
                        className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-base"
                    >
                        Proceed
                    </Button>
                </form>
            </div>
        </div>
    )
}
