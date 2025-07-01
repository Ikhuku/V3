import prisma from "@/lib/prisma"
import axios from "axios"
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import qs from "qs"


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const cookie = await cookies()
    const code = searchParams.get("code")

    if (!code) return NextResponse.json({ error: "Authorization code is missing" }, { status: 400 })
    try {
        const tokenResponse = await axios.post("https://oauth2.googleapis.com/token", qs.stringify({
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL,
            grant_type: "authorization_code",
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        const { access_token } = tokenResponse.data

        const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`)

        const users = userInfo.data


        let user = await prisma.user.findUnique({ where: { email: users.email } })

        if (!user) {
            await prisma.user.create({
                data: {
                    fullname: users.name,
                    email: users.email,
                    type:"Google"
                }
            })

            user = await prisma.user.findUnique({
                where: { email: users.email },
                select: { id: true, email:true }
            })
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
        cookie.set("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60
        })
        return NextResponse.redirect(new URL('/',request.url))
    } catch (error) {
        return NextResponse.json({ error: error.response?.data || error.message }, { status: 500 })
    }
}