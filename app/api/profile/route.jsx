import prisma from "@/lib/prisma"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET
export async function GET() {
    const cookie = cookies()
    const cookieValue = cookie.get('session')?.value
    if (!cookieValue) return NextResponse.json({ error: "UnAuthorized" }, { status: 403 })
    const token = jwt.verify(cookieValue, SECRET_KEY)
    if (!token) return NextResponse.json({ error: "UnAuthorized" }, { status: 403 })
    const id = token.userId

    const profile = await prisma.user.findUnique({
        where: { id }
    })

    if(!profile) return NextResponse.json({error:"user not found"},{status:404})

    return NextResponse.json({message:"success",profile},{status:200})

}

export async function POST(req){
    const {fullname,email,address,phone,state,region} = await req.json()
    if(!fullname||!email||!address||!phone||!state||!region) return NextResponse.json({error:"Fill all the fields"},{status:400})
    
     const cookie = cookies()
    const cookieValue = cookie.get('session')?.value
    if (!cookieValue) return NextResponse.json({ error: "UnAuthorized" }, { status: 403 })
    const token = jwt.verify(cookieValue, SECRET_KEY)
    if (!token) return NextResponse.json({ error: "UnAuthorized" }, { status: 403 })
    const id = token.userId

    await prisma.user.update({
        where:{id},
        data:{fullname,email,address,phone,state,region}
    })

    return NextResponse.json({message:"success"},{status:200})
}