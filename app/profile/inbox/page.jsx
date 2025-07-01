"use client"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function InboxPage() {
  const router=  useRouter()
  return (
    <div className="min-h-screen bg-white md:hidden lg:hidden">

      <div className="px-6 pt-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <ChevronLeft className="w-6 h-6 text-gray-700"  onClick={()=>router.back()}/>
          <div>
            <h1 className="text-xl font-bold text-black">Inbox</h1>
            <p className="text-gray-500 text-sm mt-1">
              Here you will able to see all the messages that will be sent to you.
            </p>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center min-h-[60vh">
        
        <div><img className="mt-50" src="/inbox.png" alt="" /></div>

      
             

          {/* Empty State Text */}
          <p className="text-black font-medium text-base text-center">You don't have any messages yet!</p>
        </div>
      </div>
    </div>
  )
}
