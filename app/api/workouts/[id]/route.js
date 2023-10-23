import connectMongoDB from "@/libs/mongodb";
import Workout from "@/models/workout";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Workout.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Workout updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const workout = await Workout.findOne({ _id: id });
  return NextResponse.json({ workout }, { status: 200 });
}
