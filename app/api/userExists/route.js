import React from 'react'
import connectMongoDB from "@/lib/mongodb"
import User from "@/models/user"

export async function POST(req) {
    try {
        await connectMongoDB();
        const {email} = await req.json();
        await User.findOne({email})
    } catch (error) {
        
    }
}
