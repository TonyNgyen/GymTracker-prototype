import connectMongoDB from "@/libs/mongodb"
import Workout from "@/models/workout"
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Workout.create({title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB();
    const workout = await Workout.find();
    return NextResponse.json({workout});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Workout.findByIdAndDelete(id);
    return NextResponse.json({message: "Workout deleted"}, {status: 200})
}