import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Workout from "@/models/workout"
import connectMongoDB from "@/libs/mongodb"

await connectMongoDB();
const workout = await Workout.find({});
console.log("THIS WORKS")
console.log("Workout List: ", workout)

export default async function WorkoutList() {

  return (
    <>
      {workout.map((w) => (
      <div className="p-4 border border-slade-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">{w.title}</h2>
          <div>{w.description}</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={`/editWorkout/${w._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
      ))}
    </>
  );
}

//https://youtu.be/wNWyMsrpbz0?si=zw2_QR0JVXyNqbtM&t=2665
