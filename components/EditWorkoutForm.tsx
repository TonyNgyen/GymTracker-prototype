import React from "react";

function EditWorkoutForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Workout Title"
        className="border border-slate-500 px-8 py-2"
      />

      <input
        type="text"
        placeholder="Workout Description"
        className="border border-slate-500 px-8 py-2"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Workout
      </button>
    </form>
  );
}

export default EditWorkoutForm;
