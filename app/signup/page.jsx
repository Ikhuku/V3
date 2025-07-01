"use client"



import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Wifi } from "lucide-react"

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        agreeToTerms: true,
    })

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="min-h-screen bg-white">


            <div className=" px-6 pt-8 md:hidden lg:hidden">
                {/* Logo */}
                <div className="mb-12">
                    <div className="flex items-center gap-2">

                        <div><img src="/Whatsapp-image.png" alt="" /></div>

                
                    </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-black mb-2">Sign up</h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Fill out your information below or register with your social accounts.
                    </p>
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

                    {/* Password */}
                    <div>
                        <label className="block text-black font-medium mb-3">Password</label>
                        <Input
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder=""
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-3 py-2">
                        <Checkbox
                            id="terms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked }))}
                            className="mt-0.5 w-5 h-5 border-2 border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
                        />
                        <label htmlFor="terms" className="text-sm text-black leading-relaxed">
                            Agree with <span className="underline font-medium">Terms & Conditions</span> and{" "}
                            <span className="underline font-medium">privacy policy</span>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <Button
                        type="submit"
                        className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-base"
                    >
                        Sign up
                    </Button>
                </form>

                {/* Social Login */}
                <div className="mt-8">
                    <p className="text-center text-gray-500 text-sm mb-6">or Sign Up with</p>

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
                         <div> <img src="/Vector.png" alt="" /></div>
                        </Button>

                        {/* Facebook */}
                        <Button
                            variant="outline"
                            className="w-full h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 bg-transparent hover:cusor-pointer"
                        >
                            <div>
                                <img src="/f.png" alt="" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Sign In Link */}
                <div className="text-center mt-8 pb-8">
                    <p className="text-gray-600 text-sm">
                        Already have an account ? <button className="text-black font-medium underline">Sign in</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
