import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import WorkoutSchedule from "../../../models/workoutSchedule";

export async function POST(request) {
  const { title, workouts } = await request.json();
  await connectMongoDB();
  await WorkoutSchedule.create({ title, workouts });
  return NextResponse.json({ message: "Workout Schedule Created" }, { status: 201 });
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
  return NextResponse.json({ message: "Workout Schedule deleted" }, { status: 200 });
}
