import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getWorkouts = async () => {
  try {
    const rest = await fetch("http://localhost:3000/api/workouts", { cache: "no-store" });
  } catch (error) {}
};

function WorkoutList() {
  return (
    <>
      <div className="p-4 border border-slade-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Workout Name</h2>
          <div>Workout Description</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editWorkout/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default WorkoutList;

//https://youtu.be/wNWyMsrpbz0?si=4pZhxPrIvaD3VA2p&t=2459
