import EditWorkoutForm from "@/components/EditWorkoutForm";
import React from "react";

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

async function EditWorkout({ params }) {
  const { id } = params;
  const topic = await getWorkoutById(id);
  return (
    <EditWorkoutForm
      id={id}
      title={topic["workout"]["title"]}
      description={topic["workout"]["description"]}
    />
  );
}

export default EditWorkout;
