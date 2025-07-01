import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
import prisma from "@/lib/prisma"


const SECRET_KEY = process.env.JWT_SECRET
export async function POST(req) {
    const { businessName, businessRegno, businessLocation, productType, productQaA, shippingMethod, exprience, productMedia, customerComplain, refundPolicy, warranties } = await req.json()
    if (!businessName || businessRegno || !businessLocation || !productType || !productQaA || !shippingMethod || !exprience || !productMedia || !customerComplain || !refundPolicy || !warranties) return NextResponse.json({ error: "Fill All the fields" }, { status: 400 })

    const cookie = cookies()
    const cookieValue = cookie.get('session')?.value
    if (!cookieValue) return NextResponse.json({ error: "UnAuthorized" }, { status: 403 })
    const token = jwt.verify(cookieValue, SECRET_KEY)
    if (!token) return NextResponse.json({ error: "UnAuthorized" }, { status: 403 })
    const id = token.userId

    const findSeller = await prisma.seller.findFirst({
        where: { userId: id }
    })

    if (findSeller) return NextResponse.json({ error: "Seller Already Registered" }, { status: 404 })

    await prisma.seller.create({
        data: { businessName, businessRegno, businessLocation, productType, productQaA, shippingMethod, exprience, productMedia, customerComplain, refundPolicy, warranties }
    })

    return NextResponse.json({ message: "success" }, { status: 200 })
}