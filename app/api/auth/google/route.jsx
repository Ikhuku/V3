import { NextResponse } from "next/server";

export async function GET(){
    const googleAuthURL = new URL("https://accounts.google.com/o/oauth2/v2/auth")

    googleAuthURL.searchParams.append("client_id",process.env.GOOGLE_CLIENT_ID)
    googleAuthURL.searchParams.append("redirect_uri",process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL)
    googleAuthURL.searchParams.append("response_type","code");
    googleAuthURL.searchParams.append("scope","openid email profile")

    return NextResponse.redirect(googleAuthURL.toString())
}