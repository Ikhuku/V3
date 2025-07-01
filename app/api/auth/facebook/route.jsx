import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.JWT_SECRET;
const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID

export async function POST(request) {
  try {

    // Verify token with Facebook
    const fbResponse = await axios.get(`https://graph.facebook.com/me`, {
      params: {
        fields: 'name,email',
        access_token: accessToken
      }
    });

    const { email, name } = fbResponse.data;

    if (!email) {
      return NextResponse.json({ error: 'No email found from Facebook' }, { status: 400 });
    }

    // Check if user exists in DB
    let user = await prisma.user.findUnique({
      where: { email },
    });

    // If user doesn't exist, create new one (signup)
    if (!user) {
      user = await prisma.user.create({
        data: {
          username:name,
          email,
          type:"Facebook",
        },
      });
    }

    const cookie = cookies()

    // Generate JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: '7d' });
    cookie.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60
    })

    return NextResponse.json({
      message: 'success',
    },{status:200});

  } catch (error) {
    console.error('Facebook Login Error:', error);
    return NextResponse.json({ error: 'Facebook authentication failed' }, { status: 500 });
  }
}

