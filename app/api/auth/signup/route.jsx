import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"


const SECRET_KEY = process.env.JWT_SECRET
export async function POST(req) {

    const {fullname,email,password} = await req.json()
    
    if(!fullname,email,password) return NextResponse.json({error:"Fill All the Fields"},{status:404})

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data:{fullname,email,password:hashedPassword}
    })

    const cookie = cookies()


    const token = jwt.sign({ userId: user.id,email: user.email }, SECRET_KEY, {
      expiresIn: '7d'
    })

    cookie.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60
    })

    return NextResponse.json({message:"Success"},{status:200})
}