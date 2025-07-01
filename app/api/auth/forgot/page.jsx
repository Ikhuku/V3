import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function POST(req) {
    const {email} =  await req.json()

    if(!email) return NextResponse.json({error:"email not found"},{status:404})
    
    const findEmail = await prisma.user.findFirst({
        where:{email}
    })

    if(!findEmail) return NextResponse.json({error:"User Not registered"},{status:404})

    //email template for reseting password link

    return NextResponse.json({message:"success"},{status:200})
}