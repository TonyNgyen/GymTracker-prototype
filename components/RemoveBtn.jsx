import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn({id}) {

  const removeWorkout = async() => {
    const confirmed = confirm("Are you sure?")
  }

  return (
    <button className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
