"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWorkout() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [workouts, setWorkouts] = useState("");
  const [workout, setWorkout] = useState("");

  const saveMonday = () => {
    console.log("Monday");
  };

  const saveTuesday = () => {
    console.log("Tuesday");
  };

  const saveWednesday = () => {
    console.log("Wednesday");
  };

  const saveThursday = () => {
    console.log("Thursday");
  };

  const saveFriday = () => {
    console.log("Friday");
  };

  const saveSaturday = () => {
    console.log("Saturday");
  };

  const saveSunday = () => {
    console.log("Sunday");
  };

  const setDayFunctions = {
    Monday: saveMonday,
    Tuesday: saveTuesday,
    Wednesday: saveWednesday,
    Thursday: saveThursday,
    Friday: saveFriday,
    Saturday: saveSaturday,
    Sunday: saveSunday,
  };

  const [workoutDays, setWorkoutDays] = useState({
    Monday: "1",
    Tuesday: "2",
    Wednesday: "3",
    Thursday: "4",
    Friday: "5",
    Saturday: "6",
    Sunday: "7",
  });

  const router = useRouter();

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setTitle(name);
  };

  const updateWorkoutDay = (e, day, workouts) => {
    e.preventDefault();
    setWorkoutDays((previousState) => {
      return { ...previousState, day: workouts };
    });
  };

  const rememberDay = () => {
    console.log("THIS WORKS");
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

      {Object.keys(workoutDays).map((day) => (
        <>
          <h1>{day}</h1>
          <h1>{workoutDays[day]}</h1>
          <form onSubmit={updateWorkoutDay}>
            <input
              onChange={(e) => setWorkout(e.target.value)}
              value={workout}
              type="text"
              placeholder="Workout"
              className="border border-slate-500 px-8 py-2"
            ></input>
            <button
              onClick={setDayFunctions[day]}
              type="submit"
              className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
            >
              Add Workout Day
            </button>
          </form>
        </>
      ))}

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
