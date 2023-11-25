import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Workout from "@/models/workout";
import connectMongoDB from "@/libs/mongodb";

await connectMongoDB();
// const getWorkout = async () => {
//   try {
//     const res = await Workout.find({});
//     return res;
//   } catch (error) {
//     console.log("Failed to retreive workouts from MongoDB")
//   }
// };

const getWorkout = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/workouts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function WorkoutList() {
  const workout = await getWorkout();

  return (
    <>
      {workout["workout"].map((w) => (
        <div
          className="p-4 border border-slade-300 mb-3 flex justify-between gap-5 items-start"
          key={w._id}
        >
          <div>
            <h2 className="font-bold text-2xl">{w.title}</h2>
            <div>{w.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={w._id} />
            <Link href={`/editWorkout/${w._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
