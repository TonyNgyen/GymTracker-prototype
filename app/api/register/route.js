import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {name, email, password} = await req.json();
        console.log(name)
        console.log(email)
        console.log(password)
        return NextResponse.json({message: "User Registered"}, {status:201  })
    } catch (error) {
        return NextResponse.json({message: "An error occurred"}, {status:500})
    }
}