import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, StarRating } from "@/components/ui/card";


const ProductCard = () => {
  return (
    <Card className="w-auto">
        <CardContent>
            <div className='bg-[#E6F1FC] text-sm p-1 font-semibold w-[50%] mb-2 rounded-[5px] flex items-center justify-center text-[#021236]'>
            <p>Best seller</p>
        </div>
        </CardContent>
        <CardContent className='mb-4'>
            <img
                src="/image2.webp"
                alt="iPhone 15"
                className="w-full h-[225px] lg:w-full lg:h-[300px] object-cover rounded-[5px]"
            />
        </CardContent>
        <CardHeader>
            <CardTitle>&#8358;10,000</CardTitle>
            <CardDescription>HINCE New Ambiance Color Mascara</CardDescription>
            <StarRating rating ='4' people ='120' />
        </CardHeader>
        <CardContent className='mb-6'>
            <p className="text-sm hidden lg:block">Shipping arrives <span className='font-bold'>in 2 days</span></p>
        </CardContent>
        <CardFooter className="flex justify-between">
            <button className="bg-[#021236] text-white text-sm font-bold cursor-pointer px-3 py-1 rounded-[10px]">Options</button>
        </CardFooter>
    </Card>
  )
}

export default ProductCard
