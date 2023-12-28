"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import ListTest from "@/components/ListTest"

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
      const resUserExists = await fetch("api/schedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      return user.workouts;
    } catch (error) {
      console.log(error);
    }
  }

  const workouts = getWorkoutsByEmail();

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

//https://youtu.be/r8Dg0KVnfMA?t=857