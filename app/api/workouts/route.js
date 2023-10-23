import connectMongoDB from "@/libs/mongodb"
import Workout from "@/models/workout"
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Workout.create({title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201})
    //https://youtu.be/wNWyMsrpbz0?si=b0vkLmKcnR_plmNm&t=1718
}