"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import "@/public/css/modal.css";
import { IoIosAddCircle, IoIosCheckmarkCircle } from "react-icons/io";
import ReactDOM from "react-dom";

export default function AddWorkout() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [workouts, setWorkouts] = useState("");

  // VARIABLES AND FUNCTIONS USED FOR MONDAY
  const [mondayName, setMondayName] = useState("");
  const [mondaySets, setMondaySets] = useState("");
  const [mondayReps, setMondayReps] = useState("");
  const [mondayWorkouts, setMondayWorkouts] = useState([]);

  const [modalMonday, setModalMonday] = useState(false);
  const toggleModalMonday = () => {
    setModalMonday(!modalMonday);
  };

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

  const confirmWorkoutMonday = (e) => {
    e.preventDefault();
    if (!mondayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, monday: mondayWorkouts });
  };

  const debugMonday = (e) => {
    e.preventDefault();
    console.log(mondayWorkouts);
  };

  // VARIABLES AND FUNCTIONS USED FOR TUESDAY
  const [tuesdayName, setTuesdayName] = useState("");
  const [tuesdaySets, setTuesdaySets] = useState("");
  const [tuesdayReps, setTuesdayReps] = useState("");
  const [tuesdayWorkouts, setTuesdayWorkouts] = useState([]);

  const [modalTuesday, setModalTuesday] = useState(false);
  const toggleModalTuesday = () => {
    setModalTuesday(!modalTuesday);
  };

  const saveTuesday = (e) => {
    e.preventDefault();
    if (!tuesdayName || !tuesdaySets || !tuesdayReps) {
      alert("Please fill in required inputs");
      return;
    }
    setTuesdayWorkouts([
      ...tuesdayWorkouts,
      {
        id: tuesdayWorkouts.length,
        name: tuesdayName,
        sets: tuesdaySets,
        reps: tuesdayReps,
      },
    ]);
    setTuesdayName("");
    setTuesdaySets("");
    setTuesdayReps("");
  };

  const confirmWorkoutTuesday = (e) => {
    e.preventDefault();
    if (!mondayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, tuesday: tuesdayWorkouts });
  };

  // VARIABLES AND FUNCTIONS USED FOR WEDNESDAY
  const [wednesdayName, setWednesdayName] = useState("");
  const [wednesdaySets, setWednesdaySets] = useState("");
  const [wednesdayReps, setWednesdayReps] = useState("");
  const [wednesdayWorkouts, setWednesdayWorkouts] = useState([]);

  const [modalWednesday, setModalWednesday] = useState(false);
  const toggleModalWednesday = () => {
    setModalWednesday(!modalWednesday);
  };

  const saveWednesday = (e) => {
    e.preventDefault();
    if (!wednesdayName || !wednesdaySets || !wednesdayReps) {
      alert("Please fill in required inputs");
      return;
    }
    setWednesdayWorkouts([
      ...wednesdayWorkouts,
      {
        id: wednesdayWorkouts.length,
        name: wednesdayName,
        sets: wednesdaySets,
        reps: wednesdayReps,
      },
    ]);
    setWednesdayName("");
    setWednesdaySets("");
    setWednesdayReps("");
  };

  const confirmWorkoutWednesday = (e) => {
    e.preventDefault();
    if (!mondayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, wednesday: wednesdayWorkouts });
  };

  const debug = (e) => {
    e.preventDefault();
    console.log(workouts);
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

    if (!mondayWorkouts || !tuesdayWorkouts) {
      alert("Workouts are required");
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
          <button onClick={toggleModalMonday} className="text-green-600">
            <IoIosAddCircle size={40} />
          </button>
          {modalMonday && (
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
                <button onClick={toggleModalMonday}>
                  <h1>Close</h1>
                </button>
              </form>
            </div>
          )}
          <button onClick={confirmWorkoutMonday} className="text-green-600">
            <IoIosCheckmarkCircle size={40} />
          </button>
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

      <article className="flex">
        <h1 className="text-4xl">Tuesday</h1>
        <div>
          <button onClick={toggleModalTuesday} className="text-green-600">
            <IoIosAddCircle size={40} />
          </button>
          {modalTuesday && (
            <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
              <form>
                <input
                  onChange={(e) => {
                    setTuesdayName(e.target.value);
                  }}
                  value={tuesdayName}
                  type="text"
                  placeholder="Workout"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setTuesdaySets(e.target.value);
                  }}
                  value={tuesdaySets}
                  type="number"
                  placeholder="Sets"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setTuesdayReps(e.target.value);
                  }}
                  value={tuesdayReps}
                  type="number"
                  placeholder="Reps"
                  className="border border-slate-500 px-8 py-2 "
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={setDayFunctions["Tuesday"]}
                >
                  Add Workout Day
                </button>
                {tuesdayWorkouts.map((workout) => (
                  <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
                    <h1>{workout.name}</h1>
                    <h1>{workout.sets}</h1>
                    <h1>{workout.reps}</h1>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setTuesdayWorkouts(
                          tuesdayWorkouts.filter((w) => w.id !== workout.id)
                        );
                      }}
                    >
                      <HiOutlineTrash size={40} />
                    </button>
                  </article>
                ))}
                <button onClick={toggleModalTuesday}>
                  <h1>Close</h1>
                </button>
              </form>
            </div>
          )}
          <button onClick={confirmWorkoutTuesday} className="text-green-600">
            <IoIosCheckmarkCircle size={40} />
          </button>
        </div>
      </article>

      {tuesdayWorkouts.map((workout) => (
        <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
          <h1>{workout.name}</h1>
          <h1>{workout.sets}</h1>
          <h1>{workout.reps}</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTuesdayWorkouts(
                tuesdayWorkouts.filter((w) => w.id !== workout.id)
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
        Debug Workouts
      </button>

      <button
        onClick={debugMonday}
        type="submit"
        className="bg-red-400 font-bold text-white py-3 px-6 w-fit"
      >
        Debug Monday
      </button>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
