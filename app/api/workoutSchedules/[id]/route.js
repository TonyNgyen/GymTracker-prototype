import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import WorkoutSchedule from "../../../../models/workoutSchedule";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newWorkouts: workouts } = await request.json();
  await connectMongoDB();
  await WorkoutSchedule.findByIdAndUpdate(id, { title, workouts });
  return NextResponse.json({ message: "Workout updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const workoutSchedule = await WorkoutSchedule.findOne({ _id: id });
  return NextResponse.json({ workoutSchedule }, { status: 200 });
}
