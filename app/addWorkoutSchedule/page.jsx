"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import "@/public/css/modal.css";
import { IoIosAddCircle } from "react-icons/io";
import ReactDOM from "react-dom";

export default function AddWorkout() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [workouts, setWorkouts] = useState("");
  const [mondayName, setMondayName] = useState("");
  const [mondaySets, setMondaySets] = useState("");
  const [mondayReps, setMondayReps] = useState("");
  const [mondayWorkouts, setMondayWorkouts] = useState([]);

  const saveMonday = (e) => {
    e.preventDefault();
    if (!mondayName || !mondaySets || !mondayReps) {
      alert("Please fill in required inputs");
      return;
    }
    setMondayWorkouts([
      ...mondayWorkouts,
      {
        id: mondayWorkouts.length,
        name: mondayName,
        sets: mondaySets,
        reps: mondayReps,
      },
    ]);
    setMondayName("");
    setMondaySets("");
    setMondayReps("");
  };

  const debug = (e) => {
    e.preventDefault();
    console.log(mondayWorkouts);
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

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setTitle(name);
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

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
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

      <article className="flex">
        <h1 className="text-4xl">Monday</h1>
        <div>
          <button onClick={toggleModal} className="text-green-600">
            <IoIosAddCircle size={40} />
          </button>
          {modal && (
            <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
              <form>
                <input
                  onChange={(e) => {
                    setMondayName(e.target.value);
                  }}
                  value={mondayName}
                  type="text"
                  placeholder="Workout"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setMondaySets(e.target.value);
                  }}
                  value={mondaySets}
                  type="number"
                  placeholder="Sets"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setMondayReps(e.target.value);
                  }}
                  value={mondayReps}
                  type="number"
                  placeholder="Reps"
                  className="border border-slate-500 px-8 py-2 "
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={setDayFunctions["Monday"]}
                >
                  Add Workout Day
                </button>
                {mondayWorkouts.map((workout) => (
                  <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
                    <h1>{workout.name}</h1>
                    <h1>{workout.sets}</h1>
                    <h1>{workout.reps}</h1>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setMondayWorkouts(
                          mondayWorkouts.filter((w) => w.id !== workout.id)
                        );
                      }}
                    >
                      <HiOutlineTrash size={40} />
                    </button>
                  </article>
                ))}
                <button onClick={toggleModal}>
                  <h1>Close</h1>
                </button>
              </form>
            </div>
          )}
        </div>
      </article>

      {mondayWorkouts.map((workout) => (
        <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
          <h1>{workout.name}</h1>
          <h1>{workout.sets}</h1>
          <h1>{workout.reps}</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMondayWorkouts(
                mondayWorkouts.filter((w) => w.id !== workout.id)
              );
            }}
          >
            <HiOutlineTrash size={40} />
          </button>
        </article>
      ))}

      <button
        onClick={debug}
        type="submit"
        className="bg-red-400 font-bold text-white py-3 px-6 w-fit"
      >
        Debug
      </button>

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
