import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import WorkoutSchedule from "../../../models/workoutSchedule";
import User from "@/models/user"

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  await connectMongoDB();
  const workoutSchedule = await WorkoutSchedule.find();
  return NextResponse.json({ workoutSchedule });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await WorkoutSchedule.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Workout Schedule deleted" },
    { status: 200 }
  );
}
