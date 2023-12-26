"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import WorkoutScheduleList from "./WorkoutScheduleList";

export default function UserInfo() {

  const  {data:session} = useSession();
  const day = new Date().getDay();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const email = session?.user?.email;

  const getWorkoutsByEmail = async () => {
    try {
      const workouts = await fetch("api/workoutSchedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await workouts.json();
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  getWorkoutsByEmail();

  return (
    <div>
      <div>Name: {session?.user?.name}</div>
      <div>Email: {session?.user?.email}</div>
      <button onClick={() => signOut()} className="py-2 px-4 bg-red-400">
        Log Out
      </button>
    </div>
  );
}
