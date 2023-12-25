"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

  const  {data:session} = useSession();

  const getWorkoutById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/workouts/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch workout");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading workout: ", error);
    }
  };

  await connectMongoDB();
  const user = await User.findOne({email});

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
