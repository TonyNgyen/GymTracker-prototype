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
    setWorkouts({ ...workouts, Monday: mondayWorkouts });
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
    if (!tuesdayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, Tuesday: tuesdayWorkouts });
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
    if (!wednesdayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, Wednesday: wednesdayWorkouts });
  };

  // VARIABLES AND FUNCTIONS USED FOR THURSDAY
  const [thursdayName, setThursdayName] = useState("");
  const [thursdaySets, setThursdaySets] = useState("");
  const [thursdayReps, setThursdayReps] = useState("");
  const [thursdayWorkouts, setThursdayWorkouts] = useState([]);

  const [modalThursday, setModalThursday] = useState(false);
  const toggleModalThursday = () => {
    setModalThursday(!modalThursday);
  };

  const saveThursday = (e) => {
    e.preventDefault();
    if (!thursdayName || !thursdaySets || !thursdayReps) {
      alert("Please fill in required inputs");
      return;
    }
    setThursdayWorkouts([
      ...thursdayWorkouts,
      {
        id: thursdayWorkouts.length,
        name: thursdayName,
        sets: thursdaySets,
        reps: thursdayReps,
      },
    ]);
    setThursdayName("");
    setThursdaySets("");
    setThursdayReps("");
  };

  const confirmWorkoutThursday = (e) => {
    e.preventDefault();
    if (!thursdayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, Thursday: thursdayWorkouts });
  };

  // VARIABLES AND FUNCTIONS USED FOR FRIDAY
  const [fridayName, setFridayName] = useState("");
  const [fridaySets, setFridaySets] = useState("");
  const [fridayReps, setFridayReps] = useState("");
  const [fridayWorkouts, setFridayWorkouts] = useState([]);

  const [modalFriday, setModalFriday] = useState(false);
  const toggleModalFriday = () => {
    setModalFriday(!modalFriday);
  };

  const saveFriday = (e) => {
    e.preventDefault();
    if (!fridayName || !fridaySets || !fridayReps) {
      alert("Please fill in required inputs");
      return;
    }
    setFridayWorkouts([
      ...fridayWorkouts,
      {
        id: fridayWorkouts.length,
        name: fridayName,
        sets: fridaySets,
        reps: fridayReps,
      },
    ]);
    setFridayName("");
    setFridaySets("");
    setFridayReps("");
  };

  const confirmWorkoutFriday = (e) => {
    e.preventDefault();
    if (!fridayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, Friday: fridayWorkouts });
  };

  // VARIABLES AND FUNCTIONS USED FOR SATURDAY
  const [saturdayName, setSaturdayName] = useState("");
  const [saturdaySets, setSaturdaySets] = useState("");
  const [saturdayReps, setSaturdayReps] = useState("");
  const [saturdayWorkouts, setSaturdayWorkouts] = useState([]);

  const [modalSaturday, setModalSaturday] = useState(false);
  const toggleModalSaturday = () => {
    setModalSaturday(!modalSaturday);
  };

  const saveSaturday = (e) => {
    e.preventDefault();
    if (!saturdayName || !saturdaySets || !saturdayReps) {
      alert("Please fill in required inputs");
      return;
    }
    setSaturdayWorkouts([
      ...saturdayWorkouts,
      {
        id: saturdayWorkouts.length,
        name: saturdayName,
        sets: saturdaySets,
        reps: saturdayReps,
      },
    ]);
    setSaturdayName("");
    setSaturdaySets("");
    setSaturdayReps("");
  };

  const confirmWorkoutSaturday = (e) => {
    e.preventDefault();
    if (!saturdayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, Saturday: saturdayWorkouts });
  };

  // VARIABLES AND FUNCTIONS USED FOR SUNDAY
  const [sundayName, setSundayName] = useState("");
  const [sundaySets, setSundaySets] = useState("");
  const [sundayReps, setSundayReps] = useState("");
  const [sundayWorkouts, setSundayWorkouts] = useState([]);

  const [modalSunday, setModalSunday] = useState(false);
  const toggleModalSunday = () => {
    setModalSunday(!modalSunday);
  };

  const saveSunday = (e) => {
    e.preventDefault();
    if (!sundayName || !sundaySets || !sundayReps) {
      alert("Please fill in required inputs");
      return;
    }
    setSundayWorkouts([
      ...sundayWorkouts,
      {
        id: sundayWorkouts.length,
        name: sundayName,
        sets: sundaySets,
        reps: sundayReps,
      },
    ]);
    setSundayName("");
    setSundaySets("");
    setSundayReps("");
  };

  const confirmWorkoutSunday = (e) => {
    e.preventDefault();
    if (!sundayWorkouts) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({ ...workouts, Sunday: sundayWorkouts });
  };

  const debug = (e) => {
    e.preventDefault();
    console.log(workouts);
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

    if (
      !mondayWorkouts ||
      !tuesdayWorkouts ||
      !wednesdayWorkouts ||
      !thursdayWorkouts ||
      !fridayWorkouts ||
      !saturdayWorkouts ||
      !sundayWorkouts
    ) {
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

      {/* MONDAY SECTION */}
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

      {/* // TUESDAY SECTION */}
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

      {/* // WEDNESDAY SECTION */}
      <article className="flex">
        <h1 className="text-4xl">Wednesday</h1>
        <div>
          <button onClick={toggleModalWednesday} className="text-green-600">
            <IoIosAddCircle size={40} />
          </button>
          {modalWednesday && (
            <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
              <form>
                <input
                  onChange={(e) => {
                    setWednesdayName(e.target.value);
                  }}
                  value={wednesdayName}
                  type="text"
                  placeholder="Workout"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setWednesdaySets(e.target.value);
                  }}
                  value={wednesdaySets}
                  type="number"
                  placeholder="Sets"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setWednesdayReps(e.target.value);
                  }}
                  value={wednesdayReps}
                  type="number"
                  placeholder="Reps"
                  className="border border-slate-500 px-8 py-2 "
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={setDayFunctions["Wednesday"]}
                >
                  Add Workout Day
                </button>
                {wednesdayWorkouts.map((workout) => (
                  <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
                    <h1>{workout.name}</h1>
                    <h1>{workout.sets}</h1>
                    <h1>{workout.reps}</h1>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setWednesdayWorkouts(
                          wednesdayWorkouts.filter((w) => w.id !== workout.id)
                        );
                      }}
                    >
                      <HiOutlineTrash size={40} />
                    </button>
                  </article>
                ))}
                <button onClick={toggleModalWednesday}>
                  <h1>Close</h1>
                </button>
              </form>
            </div>
          )}
          <button onClick={confirmWorkoutWednesday} className="text-green-600">
            <IoIosCheckmarkCircle size={40} />
          </button>
        </div>
      </article>

      {wednesdayWorkouts.map((workout) => (
        <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
          <h1>{workout.name}</h1>
          <h1>{workout.sets}</h1>
          <h1>{workout.reps}</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              setWednesdayWorkouts(
                wednesdayWorkouts.filter((w) => w.id !== workout.id)
              );
            }}
          >
            <HiOutlineTrash size={40} />
          </button>
        </article>
      ))}

      {/* // THURSDAY SECTION */}
      <article className="flex">
        <h1 className="text-4xl">Thursday</h1>
        <div>
          <button onClick={toggleModalThursday} className="text-green-600">
            <IoIosAddCircle size={40} />
          </button>
          {modalThursday && (
            <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
              <form>
                <input
                  onChange={(e) => {
                    setThursdayName(e.target.value);
                  }}
                  value={thursdayName}
                  type="text"
                  placeholder="Workout"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setThursdaySets(e.target.value);
                  }}
                  value={thursdaySets}
                  type="number"
                  placeholder="Sets"
                  className="border border-slate-500 px-8 py-2 "
                />

                <input
                  onChange={(e) => {
                    setThursdayReps(e.target.value);
                  }}
                  value={thursdayReps}
                  type="number"
                  placeholder="Reps"
                  className="border border-slate-500 px-8 py-2 "
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={setDayFunctions["Thursday"]}
                >
                  Add Workout Day
                </button>
                {thursdayWorkouts.map((workout) => (
                  <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
                    <h1>{workout.name}</h1>
                    <h1>{workout.sets}</h1>
                    <h1>{workout.reps}</h1>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setThursdayWorkouts(
                          thursdayWorkouts.filter((w) => w.id !== workout.id)
                        );
                      }}
                    >
                      <HiOutlineTrash size={40} />
                    </button>
                  </article>
                ))}
                <button onClick={toggleModalThursday}>
                  <h1>Close</h1>
                </button>
              </form>
            </div>
          )}
          <button onClick={confirmWorkoutThursday} className="text-green-600">
            <IoIosCheckmarkCircle size={40} />
          </button>
        </div>
      </article>

      {thursdayWorkouts.map((workout) => (
        <article className="flex text-3xl bg-blue-400 py-4 px-4 justify-evenly">
          <h1>{workout.name}</h1>
          <h1>{workout.sets}</h1>
          <h1>{workout.reps}</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              setThursdayWorkouts(
                thursdayWorkouts.filter((w) => w.id !== workout.id)
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
