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
    <section className="">
      {/* <table className="bg-red-500 text-2xl w-10/12 text-center">
        <tr className="">
          <th className="">Workout</th>
          <th className="">Sets</th>
          <th>Reps</th>
        </tr>
        {schedule[day].map((w) => (
          <tr key={w.id} className="bg-indigo-400 bordered rounded">
            <td>{w.name}</td>
            <td>{w.sets}</td>
            <td>{w.reps}</td>
          </tr>
        ))}
      </table> */}
      <div className="grid grid-cols-3 text-center mx-80 text-4xl font-bold mb-4">
        <h1>Workouts</h1>
        <h1>Sets</h1>
        <h1>Reps</h1>
      </div>
      {schedule[day].map((w) => (
        <div
          key={w.id}
          className="bg-indigo-200 bordered rounded-2xl grid-cols-3 grid text-center py-4 mx-80 text-2xl mb-2"
        >
          <p>{w.name}</p>
          <p>{w.sets}</p>
          <p>{w.reps}</p>
        </div>
      ))}
    </section>
  );
}
