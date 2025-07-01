import { NextResponse } from "next/server"


export async function GET() {
    const appleAuthURL = new URL("https://appleid.apple.com/auth/authorize")

    appleAuthURL.searchParams.append("client_id",process.env.APPLE_CLIENT_ID)
    appleAuthURL.searchParams.append("redirect_uri",process.env.NEXT_PUBLIC_APPLE_REDIRECT_URL)
    appleAuthURL.searchParams.append("response_type","code")
    appleAuthURL.searchParams.append("scope","email name")

    return NextResponse.redirect(appleAuthURL.toString())
}