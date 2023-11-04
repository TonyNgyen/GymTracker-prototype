"use client";
import { useState } from "react";

export default function AddWorkout() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !description) {
      alert("Title and description are required")
      return
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Workout Title"
        className="border border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Workout Description"
        className="border border-slate-500 px-8 py-2"
      />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Workout
      </button>
    </form>
  );
}
