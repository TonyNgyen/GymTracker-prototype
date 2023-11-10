"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWorkout() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [workouts, setWorkouts] = useState("");
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const daysInput = (days) => {
    for(const day in days) {
        
    }
    return (
        <>
            <h1 className="">Testing</h1>
        </>
    )
  }

  const router = useRouter();

  const handleNameSet = (scheduleName) => {
    setName(scheduleName);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setTitle(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !workouts) {
      alert("Title and workouts are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/workoutSchedules", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, workouts }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create workout schedule");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {days.map((day) => (
      <>
        <h1>{day}</h1>
        <form>
          <input type="text" placeholder="Workout" className="border border-slate-500 px-8 py-2">
          </input>
        </form>
      </>
    ))}
      <h1>{title}</h1>
      <form onSubmit={handleNameSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Workout Title"
          className="border border-slate-500 px-8 py-2"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Set Schedule Name
        </button>
      </form>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setWorkouts(e.target.value)}
          value={workouts}
          type="text"
          placeholder="Workout Schedule"
          className="border border-slate-500 px-8 py-2"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Workout Schedule
        </button>
      </form>
    </>
  );
}
