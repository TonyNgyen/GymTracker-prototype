import React from "react";

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

const getScheduleByName = async () => {
  let workoutSchedules = await getWorkoutSchedule();
  for (let i = 0; i < workoutSchedules["workoutSchedule"].length; i++) {
    if (workoutSchedules["workoutSchedule"][i]["title"] === "Push Pull Legs") {
      const workoutSchedule =
        workoutSchedules["workoutSchedule"][i]["workouts"];
      return workoutSchedule;
    }
  }
};

export default async function WorkoutScheduleList({ day }) {
  const schedule = await getScheduleByName();
  return (
    <div>
      {schedule[day].map((w) => (
        <div key={w.id}>
          <p>{w.name}</p>
          <p>{w.sets}</p>
          <p>{w.reps}</p>
        </div>
      ))}
    </div>
  );
}
