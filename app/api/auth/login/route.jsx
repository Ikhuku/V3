import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
import { compare } from 'bcryptjs'
import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'


const SECRET_KEY = process.env.JWT_SECRET
export async function POST(req) {
    const { email, password } = await req.json()

    if (!email || !password) return NextResponse.json({ error: "Fill all the fields" }, { status: 404 })

    const findUser = await prisma.user.findFirst({
        where: { email }
    })

    if (!findUser) return NextResponse.json({ error: "Email not registered" }, { status: 404 })

    const pass = await compare(password, findUser.password)

    if (!pass) return NextResponse.json({ error: "Password MisMatched" }, { status: 401 })

    const cookie = cookies()

    const token = jwt.sign({ userId: findUser.id, email: findUser.email }, SECRET_KEY, {
        expiresIn: '7d'
    })

    cookie.set("session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: 7 * 24 * 60 * 60
    })

    return NextResponse.json({message:"success"},{status:200})
}
