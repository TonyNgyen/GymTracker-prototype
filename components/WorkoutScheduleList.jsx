import React from "react";
import ScheduleSelect from "./ScheduleSelect";

const getWorkoutSchedule = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/workoutSchedules", {
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

const getSchedules = async () => {
  let data = await getWorkoutSchedule();
  let workoutSchedules = {};
  for (let i = 0; i < data["workoutSchedule"].length; i++) {
    workoutSchedules[data["workoutSchedule"][i]["title"]] =
      data["workoutSchedule"][i]["workouts"];
  }
  return workoutSchedules;
};

export default async function WorkoutScheduleList({ day }) {
  const workoutSchedules = await getSchedules();
  return (
    <>
      {Object.keys(workoutSchedules).length == true && (
        <ScheduleSelect schedule={workoutSchedules} day={day} />
      )}
      {!Object.keys(workoutSchedules).length && (
        <section className="bg-indigo-200 p-10 flex justify-center w-1/2 mx-auto rounded-md">
        <h1 className="text-4xl">There are no workouts to display</h1>
        </section>
        )}
    </>
  );
}
