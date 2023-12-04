import EditWorkoutForm from "@/components/EditWorkoutForm";
import React from "react";

const getWorkoutScheduleById = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/workoutSchedules/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch workout schedule");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading workout schedule: ", error);
  }
};

async function EditWorkoutSchedule({ params }) {
  const { id } = params;
  const topic = await getWorkoutScheduleById(id);
  return (
    <EditWorkoutScheduleForm
      id={id}
      title={topic["workoutSchedule"]["title"]}
      workouts={topic["workoutSchedule"]["workouts"]}
    />
  );
}

export default EditWorkoutSchedule;
