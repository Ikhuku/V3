import jose from 'node-jose'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'

async function generateClientSecret() {
    const key = await jose.JWK.asKey(process.env.APPLE_PRIVATE_KEY, "pem")

    return jwt.sign(
        {
            iss: process.env.APPLE_TEAM_ID,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 3600,
            aud: "https://appleid.apple.com",
            sub: process.env.APPLE_CLIENT_ID,
        },
        key.toPEM(true),
        { algorithm: 'ES256', keyid: process.env.APPLE_KEY_ID }
    )
}

export async function GET(request) {
    const cookie = await cookies()
    const {searchParams} = new URL(request.url)
    const code = searchParams.get("code")

    if (!code) {
        return NextResponse.json({error:"Autorization code is missing"},{status:400})
    }

    try {
        const clientSecret = await generateClientSecret()

        const {data} = await axios.post("https://appleid.apple.com/auth/token",null,{
            params:{
                client_id:process.env.APPLE_CLIENT_ID,
                client_secret:clientSecret,
                redirect_uri:process.env.NEXT_PUBLIC_APPLE_REDIRECT_URL,
                grant_type:"authorization_code",
                code,
            }
        })

        const appleUser = jwt.decode(data.id_token)

        await prisma.user.create({
            data:{
                fullname:appleUser.name?.firstName||"Apple User",
                email: appleUser.email,
                type: "Apple"
            }
        })

        let user = await prisma.user.findUnique({
                    where:{email:appleUser.email},
                    select:{id:true}
                })
        
        const token = jwt.sign({userId:user.id,email:user.email},process.env.JWT_SECRET,{expiresIn:'7d'})

        cookie.set("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60
        })
        return NextResponse.redirect("/")
    } catch (error) {
        return NextResponse.json({error:"Apple OAuth Login Failed"},{status:500})
    }
}