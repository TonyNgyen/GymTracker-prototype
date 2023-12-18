import React from "react";
import ScheduleSelect from "./ScheduleSelect";
import ScheduleSelectTest from "./ScheduleSelectTest";

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
      <ScheduleSelectTest schedule={workoutSchedules} day={day} />
    </>
  );
}
