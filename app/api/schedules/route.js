import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user"

export async function POST(req) {
    try {
      await connectMongoDB();
      const { email } = await req.json();
      const user = await User.findOne({ email });
      console.log("TEST: ", user);
      return NextResponse.json({ user });
    } catch (error) {
      console.log(error);
    }
  }
