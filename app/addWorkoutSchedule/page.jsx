"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import "@/public/css/modal.css";

export default function AddWorkout() {
  const router = useRouter();
  const [title, setTitle] = useState("Pick a Title");
  const [name, setName] = useState("");
  const [workouts, setWorkouts] = useState("");

  // VARIABLES AND FUNCTIONS USED FOR MONDAY
  const [mondayName, setMondayName] = useState("");
  const [mondaySets, setMondaySets] = useState("");
  const [mondayReps, setMondayReps] = useState("");
  const [restMonday, setRestMonday] = useState(false);
  const [mondayWorkouts, setMondayWorkouts] = useState([]);

  const toggleRestMonday = () => {
    setRestMonday(!restMonday);
  };
  const displayRestMonday = () => {
    if (restMonday) {
      return "Rest Day";
    } else {
      return "Workout Day";
    }
  };

  const [restModalMonday, setRestModalMonday] = useState(false);
  const toggleRestModalMonday = () => {
    setRestModalMonday(!restModalMonday);
  };

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
    if (mondayWorkouts.length == 0 && !restMonday) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({
      ...workouts,
      Monday: { rest: restMonday, workouts: mondayWorkouts },
    });
  };

  const debugMonday = (e) => {
    e.preventDefault();
    console.log(mondayWorkouts);
  };

  // VARIABLES AND FUNCTIONS USED FOR TUESDAY
  const [tuesdayName, setTuesdayName] = useState("");
  const [tuesdaySets, setTuesdaySets] = useState("");
  const [tuesdayReps, setTuesdayReps] = useState("");
  const [restTuesday, setRestTuesday] = useState(false);
  const [tuesdayWorkouts, setTuesdayWorkouts] = useState([]);

  const toggleRestTuesday = () => {
    setRestTuesday(!restTuesday);
  };
  const displayRestTuesday = () => {
    if (restTuesday) {
      return "Rest Day";
    } else {
      return "Workout Day";
    }
  };

  const [restModalTuesday, setRestModalTuesday] = useState(false);
  const toggleRestModalTuesday = () => {
    setRestModalTuesday(!restModalTuesday);
  };

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
    if (tuesdayWorkouts.length == 0 && !restTuesday) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({
      ...workouts,
      Tuesday: { rest: restTuesday, workouts: tuesdayWorkouts },
    });
  };

  // VARIABLES AND FUNCTIONS USED FOR WEDNESDAY
  const [wednesdayName, setWednesdayName] = useState("");
  const [wednesdaySets, setWednesdaySets] = useState("");
  const [wednesdayReps, setWednesdayReps] = useState("");
  const [restWednesday, setRestWednesday] = useState(false);
  const [wednesdayWorkouts, setWednesdayWorkouts] = useState([]);

  const toggleRestWednesday = () => {
    setRestWednesday(!restWednesday);
  };
  const displayRestWednesday = () => {
    if (restWednesday) {
      return "Rest Day";
    } else {
      return "Workout Day";
    }
  };

  const [restModalWednesday, setRestModalWednesday] = useState(false);
  const toggleRestModalWednesday = () => {
    setRestModalWednesday(!restModalWednesday);
  };

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
    if (wednesdayWorkouts.length == 0 && !restWednesday) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({
      ...workouts,
      Wednesday: { rest: restWednesday, workouts: wednesdayWorkouts },
    });
  };

  // VARIABLES AND FUNCTIONS USED FOR THURSDAY
  const [thursdayName, setThursdayName] = useState("");
  const [thursdaySets, setThursdaySets] = useState("");
  const [thursdayReps, setThursdayReps] = useState("");
  const [restThursday, setRestThursday] = useState(false);
  const [thursdayWorkouts, setThursdayWorkouts] = useState([]);

  const toggleRestThursday = () => {
    setRestThursday(!restThursday);
  };
  const displayRestThursday = () => {
    if (restThursday) {
      return "Rest Day";
    } else {
      return "Workout Day";
    }
  };

  const [restModalThursday, setRestModalThursday] = useState(false);
  const toggleRestModalThursday = () => {
    setRestModalThursday(!restModalThursday);
  };

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
    if (thursdayWorkouts.length == 0 && !restThursday) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({
      ...workouts,
      Thursday: { rest: restThursday, workouts: thursdayWorkouts },
    });
  };

  // VARIABLES AND FUNCTIONS USED FOR FRIDAY
  const [fridayName, setFridayName] = useState("");
  const [fridaySets, setFridaySets] = useState("");
  const [fridayReps, setFridayReps] = useState("");
  const [restFriday, setRestFriday] = useState(false);
  const [fridayWorkouts, setFridayWorkouts] = useState([]);

  const toggleRestFriday = () => {
    setRestFriday(!restFriday);
  };
  const displayRestFriday = () => {
    if (restFriday) {
      return "Rest Day";
    } else {
      return "Workout Day";
    }
  };

  const [restModalFriday, setRestModalFriday] = useState(false);
  const toggleRestModalFriday = () => {
    setRestModalFriday(!restModalFriday);
  };

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
    if (fridayWorkouts.length == 0 && !restFriday) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({
      ...workouts,
      Friday: { rest: restFriday, workouts: fridayWorkouts },
    });
  };

  // VARIABLES AND FUNCTIONS USED FOR SATURDAY
  const [saturdayName, setSaturdayName] = useState("");
  const [saturdaySets, setSaturdaySets] = useState("");
  const [saturdayReps, setSaturdayReps] = useState("");
  const [restSaturday, setRestSaturday] = useState(false);
  const [saturdayWorkouts, setSaturdayWorkouts] = useState([]);

  const toggleRestSaturday = () => {
    setRestSaturday(!restSaturday);
  };
  const displayRestSaturday = () => {
    if (restSaturday) {
      return "Rest Day";
    } else {
      return "Workout Day";
    }
  };

  const [restModalSaturday, setRestModalSaturday] = useState(false);
  const toggleRestModalSaturday = () => {
    setRestModalSaturday(!restModalSaturday);
  };

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
    if (saturdayWorkouts.length == 0 && !restSaturday) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({
      ...workouts,
      Saturday: { rest: restSaturday, workouts: saturdayWorkouts },
    });
  };

  // VARIABLES AND FUNCTIONS USED FOR SUNDAY
  const [sundayName, setSundayName] = useState("");
  const [sundaySets, setSundaySets] = useState("");
  const [sundayReps, setSundayReps] = useState("");
  const [restSunday, setRestSunday] = useState(false);
  const [sundayWorkouts, setSundayWorkouts] = useState([]);

  const toggleRestSunday = () => {
    setRestSunday(!restSunday);
  };
  const displayRestSunday = () => {
    if (restSunday) {
      return "Rest Day";
    } else {
      return "Workout Day";
    }
  };

  const [restModalSunday, setRestModalSunday] = useState(false);
  const toggleRestModalSunday = () => {
    setRestModalSunday(!restModalSunday);
  };

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
    if (sundayWorkouts.length == 0 && !restSunday) {
      alert("Workouts are required");
      return;
    }
    setWorkouts({
      ...workouts,
      Sunday: { rest: restSunday, workouts: sundayWorkouts },
    });
  };

  const debug = (e) => {
    e.preventDefault();
    console.log(workouts);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setTitle(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (!mondayWorkouts.length && !restMonday) ||
      (!tuesdayWorkouts.length && !restTuesday) ||
      (!wednesdayWorkouts.length && !restWednesday) ||
      (!thursdayWorkouts.length && !restThursday) ||
      (!fridayWorkouts.length && !restFriday) ||
      (!saturdayWorkouts.length && !restSaturday) ||
      (!sundayWorkouts.length && !restSunday)
    ) {
      alert("Workouts are required");
      return;
    }

    if (restMonday) {
      workouts["Monday"] = { rest: restMonday, workouts: {} };
    }
    if (restTuesday) {
      workouts["Tuesday"] = { rest: restTuesday, workouts: {} };
    }
    if (restWednesday) {
      workouts["Wednesday"] = { rest: restWednesday, workouts: {} };
    }
    if (restThursday) {
      workouts["Thursday"] = { rest: restThursday, workouts: {} };
    }
    if (restFriday) {
      workouts["Friday"] = { rest: restFriday, workouts: {} };
    }
    if (restSaturday) {
      workouts["Saturday"] = { rest: restSaturday, workouts: {} };
    }
    if (restSunday) {
      workouts["Sunday"] = { rest: restSunday, workouts: {} };
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
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <form
        onSubmit={handleNameSubmit}
        className="flex justify-center mb-20 mt-10"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Workout Title"
          className="border border-slate-500 px-8 py-2 rounded-md mr-5 text-2xl font-bold"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Set Schedule Name
        </button>
      </form>

      {/* MONDAY SECTION */}
      <main className="grid place-items-center">
        <section className="bg-gray-200 w-1/2 p-4 drop-shadow-xl shadow-gray-300 rounded-lg mb-14">
          <article className="grid grid-cols-2 mb-7">
            <article className="flex">
              <h1 className={" text-black text-4xl mr-4"}>Monday</h1>
              <button
                onClick={toggleRestMonday}
                className={
                  (restMonday ? "bg-red-400" : "bg-indigo-500") +
                  " px-4 rounded-full mr-2 text-lg text-white"
                }
              >
                {displayRestMonday()}
              </button>
            </article>
            <article className="flex justify-end">
              <button
                onClick={toggleModalMonday}
                className={
                  (restMonday ? "hidden" : "bg-indigo-500") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
              <button
                onClick={toggleRestModalMonday}
                className={
                  (restMonday ? "bg-indigo-200" : "hidden") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
            </article>
          </article>

          <article className={(restMonday ? "blur-sm" : "") + " mb-7"}>
            {mondayWorkouts.map((workout) => (
              <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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

            {mondayWorkouts.length == 0 && (
              <article className="text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>There are no workouts for Monday.</h1>
              </article>
            )}
          </article>

          <article className="flex justify-end">
            <button
              onClick={confirmWorkoutMonday}
              className={
                "px-4 rounded-full ml-1 text-lg text-white bg-indigo-500 py-2"
              }
            >
              Confirm Workout
            </button>
          </article>
        </section>
        {restModalMonday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <article className="bg-white p-8 w-1/2 rounded-md">
              <h1 className="text-2xl leading-9 mb-4">
                Unable to add workout since Monday is a rest day. Please change
                Monday to a workout day to add workouts.
              </h1>
              <button
                onClick={toggleRestModalMonday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </article>
          </div>
        )}
        {modalMonday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <form className="bg-white p-10 rounded-md">
              <section className="mb-7">
                <input
                  onChange={(e) => {
                    setMondayName(e.target.value);
                  }}
                  value={mondayName}
                  type="text"
                  placeholder="Workout"
                  className="border-b border-slate-500 px-8 py-2 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setMondaySets(e.target.value);
                  }}
                  value={mondaySets}
                  type="number"
                  placeholder="Sets"
                  className="border-b border-slate-500 px-8 py-2 mx-4 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setMondayReps(e.target.value);
                  }}
                  value={mondayReps}
                  type="number"
                  placeholder="Reps"
                  className="border-b border-slate-500 px-8 py-2 mr-4 text-2xl"
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={saveMonday}
                >
                  Add Workout Day
                </button>
              </section>
              <section className="mb-7">
                {mondayWorkouts.map((workout) => (
                  <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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
              </section>
              <button
                onClick={toggleModalMonday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </form>
          </div>
        )}

        {/* TUESDAY SECTION */}
        <section className="bg-gray-200 w-1/2 p-4 drop-shadow-xl shadow-gray-300 rounded-lg mb-14">
        <article className="grid grid-cols-2 mb-7">
            <article className="flex">
              <h1 className={" text-black text-4xl mr-4"}>Tuesday</h1>
              <button
                onClick={toggleRestTuesday}
                className={
                  (restTuesday ? "bg-red-400" : "bg-indigo-500") +
                  " px-4 rounded-full mr-2 text-lg text-white"
                }
              >
                {displayRestTuesday()}
              </button>
            </article>
            <article className="flex justify-end">
              <button
                onClick={toggleModalTuesday}
                className={
                  (restTuesday ? "hidden" : "bg-indigo-500") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
              <button
                onClick={toggleRestModalTuesday}
                className={
                  (restTuesday ? "bg-indigo-200" : "hidden") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
            </article>
          </article>

          <article className={(restTuesday ? "blur-sm" : "") + " mb-7"}>
            {tuesdayWorkouts.map((workout) => (
              <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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

            {tuesdayWorkouts.length == 0 && (
              <article className="text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>There are no workouts for Tuesday.</h1>
              </article>
            )}
          </article>

          <article className="flex justify-end">
            <button
              onClick={confirmWorkoutTuesday}
              className={
                "px-4 rounded-full ml-1 text-lg text-white bg-indigo-500 py-2"
              }
            >
              Confirm Workout
            </button>
          </article>
        </section>
        {restModalTuesday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <article className="bg-white p-8 w-1/2 rounded-md">
              <h1 className="text-2xl leading-9 mb-4">
                Unable to add workout since Tuesday is a rest day. Please change
                Tuesday to a workout day to add workouts.
              </h1>
              <button
                onClick={toggleRestModalTuesday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </article>
          </div>
        )}
        {modalTuesday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <form className="bg-white p-10 rounded-md">
              <section className="mb-7">
                <input
                  onChange={(e) => {
                    setTuesdayName(e.target.value);
                  }}
                  value={tuesdayName}
                  type="text"
                  placeholder="Workout"
                  className="border-b border-slate-500 px-8 py-2 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setTuesdaySets(e.target.value);
                  }}
                  value={tuesdaySets}
                  type="number"
                  placeholder="Sets"
                  className="border-b border-slate-500 px-8 py-2 mx-4 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setTuesdayReps(e.target.value);
                  }}
                  value={tuesdayReps}
                  type="number"
                  placeholder="Reps"
                  className="border-b border-slate-500 px-8 py-2 mr-4 text-2xl"
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={saveTuesday}
                >
                  Add Workout Day
                </button>
              </section>
              <section className="mb-7">
                {tuesdayWorkouts.map((workout) => (
                  <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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
              </section>
              <button
                onClick={toggleModalTuesday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </form>
          </div>
        )}

        {/* WEDNESDAY SECTION */}
        <section className="bg-gray-200 w-1/2 p-4 drop-shadow-xl shadow-gray-300 rounded-lg mb-14">
        <article className="grid grid-cols-2 mb-7">
            <article className="flex">
              <h1 className={" text-black text-4xl mr-4"}>Wednesday</h1>
              <button
                onClick={toggleRestWednesday}
                className={
                  (restWednesday ? "bg-red-400" : "bg-indigo-500") +
                  " px-4 rounded-full mr-2 text-lg text-white"
                }
              >
                {displayRestWednesday()}
              </button>
            </article>
            <article className="flex justify-end">
              <button
                onClick={toggleModalWednesday}
                className={
                  (restWednesday ? "hidden" : "bg-indigo-500") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
              <button
                onClick={toggleRestModalWednesday}
                className={
                  (restWednesday ? "bg-indigo-200" : "hidden") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
            </article>
          </article>

          <article className={(restWednesday ? "blur-sm" : "") + " mb-7"}>
            {wednesdayWorkouts.map((workout) => (
              <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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

            {wednesdayWorkouts.length == 0 && (
              <article className="text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>There are no workouts for Wednesday.</h1>
              </article>
            )}
          </article>

          <article className="flex justify-end">
            <button
              onClick={confirmWorkoutWednesday}
              className={
                "px-4 rounded-full ml-1 text-lg text-white bg-indigo-500 py-2"
              }
            >
              Confirm Workout
            </button>
          </article>
        </section>
        {restModalWednesday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <article className="bg-white p-8 w-1/2 rounded-md">
              <h1 className="text-2xl leading-9 mb-4">
                Unable to add workout since Wednesday is a rest day. Please
                change Wednesday to a workout day to add workouts.
              </h1>
              <button
                onClick={toggleRestModalWednesday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </article>
          </div>
        )}
        {modalWednesday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <form className="bg-white p-10 rounded-md">
              <section className="mb-7">
                <input
                  onChange={(e) => {
                    setWednesdayName(e.target.value);
                  }}
                  value={wednesdayName}
                  type="text"
                  placeholder="Workout"
                  className="border-b border-slate-500 px-8 py-2 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setWednesdaySets(e.target.value);
                  }}
                  value={wednesdaySets}
                  type="number"
                  placeholder="Sets"
                  className="border-b border-slate-500 px-8 py-2 mx-4 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setWednesdayReps(e.target.value);
                  }}
                  value={wednesdayReps}
                  type="number"
                  placeholder="Reps"
                  className="border-b border-slate-500 px-8 py-2 mr-4 text-2xl"
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={saveWednesday}
                >
                  Add Workout Day
                </button>
              </section>
              <section className="mb-7">
                {wednesdayWorkouts.map((workout) => (
                  <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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
              </section>
              <button
                onClick={toggleModalWednesday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </form>
          </div>
        )}

        {/* THURSDAY SECTION */}
        <section className="bg-gray-200 w-1/2 p-4 drop-shadow-xl shadow-gray-300 rounded-lg mb-14">
        <article className="grid grid-cols-2 mb-7">
            <article className="flex">
              <h1 className={" text-black text-4xl mr-4"}>Thursday</h1>
              <button
                onClick={toggleRestThursday}
                className={
                  (restThursday ? "bg-red-400" : "bg-indigo-500") +
                  " px-4 rounded-full mr-2 text-lg text-white"
                }
              >
                {displayRestThursday()}
              </button>
            </article>
            <article className="flex justify-end">
              <button
                onClick={toggleModalThursday}
                className={
                  (restThursday ? "hidden" : "bg-indigo-500") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
              <button
                onClick={toggleRestModalThursday}
                className={
                  (restThursday ? "bg-indigo-200" : "hidden") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
            </article>
          </article>

          <article className={(restThursday ? "blur-sm" : "") + " mb-7"}>
            {thursdayWorkouts.map((workout) => (
              <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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

            {thursdayWorkouts.length == 0 && (
              <article className="text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>There are no workouts for Thursday.</h1>
              </article>
            )}
          </article>

          <article className="flex justify-end">
            <button
              onClick={confirmWorkoutThursday}
              className={
                "px-4 rounded-full ml-1 text-lg text-white bg-indigo-500 py-2"
              }
            >
              Confirm Workout
            </button>
          </article>
        </section>
        {restModalThursday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <article className="bg-white p-8 w-1/2 rounded-md">
              <h1 className="text-2xl leading-9 mb-4">
                Unable to add workout since Thursday is a rest day. Please
                change Thursday to a workout day to add workouts.
              </h1>
              <button
                onClick={toggleRestModalThursday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </article>
          </div>
        )}
        {modalThursday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <form className="bg-white p-10 rounded-md">
              <section className="mb-7">
                <input
                  onChange={(e) => {
                    setThursdayName(e.target.value);
                  }}
                  value={thursdayName}
                  type="text"
                  placeholder="Workout"
                  className="border-b border-slate-500 px-8 py-2 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setThursdaySets(e.target.value);
                  }}
                  value={thursdaySets}
                  type="number"
                  placeholder="Sets"
                  className="border-b border-slate-500 px-8 py-2 mx-4 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setThursdayReps(e.target.value);
                  }}
                  value={thursdayReps}
                  type="number"
                  placeholder="Reps"
                  className="border-b border-slate-500 px-8 py-2 mr-4 text-2xl"
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={saveThursday}
                >
                  Add Workout Day
                </button>
              </section>
              <section className="mb-7">
                {thursdayWorkouts.map((workout) => (
                  <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
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
              </section>
              <button
                onClick={toggleModalThursday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </form>
          </div>
        )}

        {/* FRIDAY SECTION */}
        <section className="bg-gray-200 w-1/2 p-4 drop-shadow-xl shadow-gray-300 rounded-lg mb-14">
        <article className="grid grid-cols-2 mb-7">
            <article className="flex">
              <h1 className={" text-black text-4xl mr-4"}>Friday</h1>
              <button
                onClick={toggleRestFriday}
                className={
                  (restFriday ? "bg-red-400" : "bg-indigo-500") +
                  " px-4 rounded-full mr-2 text-lg text-white"
                }
              >
                {displayRestFriday()}
              </button>
            </article>
            <article className="flex justify-end">
              <button
                onClick={toggleModalFriday}
                className={
                  (restFriday ? "hidden" : "bg-indigo-500") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
              <button
                onClick={toggleRestModalFriday}
                className={
                  (restFriday ? "bg-indigo-200" : "hidden") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
            </article>
          </article>

          <article className={(restFriday ? "blur-sm" : "") + " mb-7"}>
            {fridayWorkouts.map((workout) => (
              <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>{workout.name}</h1>
                <h1>{workout.sets}</h1>
                <h1>{workout.reps}</h1>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFridayWorkouts(
                      fridayWorkouts.filter((w) => w.id !== workout.id)
                    );
                  }}
                >
                  <HiOutlineTrash size={40} />
                </button>
              </article>
            ))}

            {fridayWorkouts.length == 0 && (
              <article className="text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>There are no workouts for Friday.</h1>
              </article>
            )}
          </article>

          <article className="flex justify-end">
            <button
              onClick={confirmWorkoutFriday}
              className={
                "px-4 rounded-full ml-1 text-lg text-white bg-indigo-500 py-2"
              }
            >
              Confirm Workout
            </button>
          </article>
        </section>
        {restModalFriday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <article className="bg-white p-8 w-1/2 rounded-md">
              <h1 className="text-2xl leading-9 mb-4">
                Unable to add workout since Friday is a rest day. Please change
                Friday to a workout day to add workouts.
              </h1>
              <button
                onClick={toggleRestModalFriday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </article>
          </div>
        )}
        {modalFriday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <form className="bg-white p-10 rounded-md">
              <section className="mb-7">
                <input
                  onChange={(e) => {
                    setFridayName(e.target.value);
                  }}
                  value={fridayName}
                  type="text"
                  placeholder="Workout"
                  className="border-b border-slate-500 px-8 py-2 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setFridaySets(e.target.value);
                  }}
                  value={fridaySets}
                  type="number"
                  placeholder="Sets"
                  className="border-b border-slate-500 px-8 py-2 mx-4 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setFridayReps(e.target.value);
                  }}
                  value={fridayReps}
                  type="number"
                  placeholder="Reps"
                  className="border-b border-slate-500 px-8 py-2 mr-4 text-2xl"
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={saveFriday}
                >
                  Add Workout Day
                </button>
              </section>
              <section className="mb-7">
                {fridayWorkouts.map((workout) => (
                  <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                    <h1>{workout.name}</h1>
                    <h1>{workout.sets}</h1>
                    <h1>{workout.reps}</h1>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setFridayWorkouts(
                          fridayWorkouts.filter((w) => w.id !== workout.id)
                        );
                      }}
                    >
                      <HiOutlineTrash size={40} />
                    </button>
                  </article>
                ))}
              </section>
              <button
                onClick={toggleModalFriday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </form>
          </div>
        )}

        {/* SATURDAY SECTION */}
        <section className="bg-gray-200 w-1/2 p-4 drop-shadow-xl shadow-gray-300 rounded-lg mb-14">
        <article className="grid grid-cols-2 mb-7">
            <article className="flex">
              <h1 className={" text-black text-4xl mr-4"}>Saturday</h1>
              <button
                onClick={toggleRestSaturday}
                className={
                  (restSaturday ? "bg-red-400" : "bg-indigo-500") +
                  " px-4 rounded-full mr-2 text-lg text-white"
                }
              >
                {displayRestSaturday()}
              </button>
            </article>
            <article className="flex justify-end">
              <button
                onClick={toggleModalSaturday}
                className={
                  (restSaturday ? "hidden" : "bg-indigo-500") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
              <button
                onClick={toggleRestModalSaturday}
                className={
                  (restSaturday ? "bg-indigo-200" : "hidden") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
            </article>
          </article>

          <article className={(restSaturday ? "blur-sm" : "") + " mb-7"}>
            {saturdayWorkouts.map((workout) => (
              <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>{workout.name}</h1>
                <h1>{workout.sets}</h1>
                <h1>{workout.reps}</h1>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSaturdayWorkouts(
                      saturdayWorkouts.filter((w) => w.id !== workout.id)
                    );
                  }}
                >
                  <HiOutlineTrash size={40} />
                </button>
              </article>
            ))}

            {saturdayWorkouts.length == 0 && (
              <article className="text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>There are no workouts for Saturday.</h1>
              </article>
            )}
          </article>

          <article className="flex justify-end">
            <button
              onClick={confirmWorkoutSaturday}
              className={
                "px-4 rounded-full ml-1 text-lg text-white bg-indigo-500 py-2"
              }
            >
              Confirm Workout
            </button>
          </article>
        </section>
        {restModalSaturday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <article className="bg-white p-8 w-1/2 rounded-md">
              <h1 className="text-2xl leading-9 mb-4">
                Unable to add workout since Saturday is a rest day. Please
                change Saturday to a workout day to add workouts.
              </h1>
              <button
                onClick={toggleRestModalSaturday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </article>
          </div>
        )}
        {modalSaturday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <form className="bg-white p-10 rounded-md">
              <section className="mb-7">
                <input
                  onChange={(e) => {
                    setSaturdayName(e.target.value);
                  }}
                  value={saturdayName}
                  type="text"
                  placeholder="Workout"
                  className="border-b border-slate-500 px-8 py-2 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setSaturdaySets(e.target.value);
                  }}
                  value={saturdaySets}
                  type="number"
                  placeholder="Sets"
                  className="border-b border-slate-500 px-8 py-2 mx-4 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setSaturdayReps(e.target.value);
                  }}
                  value={saturdayReps}
                  type="number"
                  placeholder="Reps"
                  className="border-b border-slate-500 px-8 py-2 mr-4 text-2xl"
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={saveSaturday}
                >
                  Add Workout Day
                </button>
              </section>
              <section className="mb-7">
                {saturdayWorkouts.map((workout) => (
                  <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                    <h1>{workout.name}</h1>
                    <h1>{workout.sets}</h1>
                    <h1>{workout.reps}</h1>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSaturdayWorkouts(
                          saturdayWorkouts.filter((w) => w.id !== workout.id)
                        );
                      }}
                    >
                      <HiOutlineTrash size={40} />
                    </button>
                  </article>
                ))}
              </section>
              <button
                onClick={toggleModalSaturday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </form>
          </div>
        )}

        {/* SUNDAY SECTION */}
        <section className="bg-gray-200 w-1/2 p-4 drop-shadow-xl shadow-gray-300 rounded-lg mb-14">
        <article className="grid grid-cols-2 mb-7">
            <article className="flex">
              <h1 className={" text-black text-4xl mr-4"}>Sunday</h1>
              <button
                onClick={toggleRestSunday}
                className={
                  (restSunday ? "bg-red-400" : "bg-indigo-500") +
                  " px-4 rounded-full mr-2 text-lg text-white"
                }
              >
                {displayRestSunday()}
              </button>
            </article>
            <article className="flex justify-end">
              <button
                onClick={toggleModalSunday}
                className={
                  (restSunday ? "hidden" : "bg-indigo-500") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
              <button
                onClick={toggleRestModalSunday}
                className={
                  (restSunday ? "bg-indigo-200" : "hidden") +
                  " px-4 rounded-full text-lg text-white"
                }
              >
                Add Workout
              </button>
            </article>
          </article>

          <article className={(restSunday ? "blur-sm" : "") + " mb-7"}>
            {sundayWorkouts.map((workout) => (
              <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>{workout.name}</h1>
                <h1>{workout.sets}</h1>
                <h1>{workout.reps}</h1>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSundayWorkouts(
                      sundayWorkouts.filter((w) => w.id !== workout.id)
                    );
                  }}
                >
                  <HiOutlineTrash size={40} />
                </button>
              </article>
            ))}

            {sundayWorkouts.length == 0 && (
              <article className="text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                <h1>There are no workouts for Sunday.</h1>
              </article>
            )}
          </article>

          <article className="flex justify-end">
            <button
              onClick={confirmWorkoutSunday}
              className={
                "px-4 rounded-full ml-1 text-lg text-white bg-indigo-500 py-2"
              }
            >
              Confirm Workout
            </button>
          </article>
        </section>
        {restModalSunday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <article className="bg-white p-8 w-1/2 rounded-md">
              <h1 className="text-2xl leading-9 mb-4">
                Unable to add workout since Sunday is a rest day. Please change
                Sunday to a workout day to add workouts.
              </h1>
              <button
                onClick={toggleRestModalSunday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </article>
          </div>
        )}
        {modalSunday && (
          <div className="justify-center flex fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-gray-600 items-center">
            <form className="bg-white p-10 rounded-md">
              <section className="mb-7">
                <input
                  onChange={(e) => {
                    setSundayName(e.target.value);
                  }}
                  value={sundayName}
                  type="text"
                  placeholder="Workout"
                  className="border-b border-slate-500 px-8 py-2 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setSundaySets(e.target.value);
                  }}
                  value={sundaySets}
                  type="number"
                  placeholder="Sets"
                  className="border-b border-slate-500 px-8 py-2 mx-4 text-2xl"
                />

                <input
                  onChange={(e) => {
                    setSundayReps(e.target.value);
                  }}
                  value={sundayReps}
                  type="number"
                  placeholder="Reps"
                  className="border-b border-slate-500 px-8 py-2 mr-4 text-2xl"
                />

                <button
                  type="submit"
                  className="bg-green-600 font-bold text-white py-2 px-3 w-fit"
                  onClick={saveSunday}
                >
                  Add Workout Day
                </button>
              </section>
              <section className="mb-7">
                {sundayWorkouts.map((workout) => (
                  <article className="grid grid-cols-4 justify-items-center text-3xl bg-indigo-200 py-4 px-4 mb-4 rounded-lg">
                    <h1>{workout.name}</h1>
                    <h1>{workout.sets}</h1>
                    <h1>{workout.reps}</h1>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSundayWorkouts(
                          sundayWorkouts.filter((w) => w.id !== workout.id)
                        );
                      }}
                    >
                      <HiOutlineTrash size={40} />
                    </button>
                  </article>
                ))}
              </section>
              <button
                onClick={toggleModalSunday}
                className="bg-red-400 py-2 px-4 rounded-xl text-xl"
              >
                <h1>Close</h1>
              </button>
            </form>
          </div>
        )}
      </main>

      {/* <button
        onClick={debug}
        type="submit"
        className="bg-red-400 font-bold text-white py-3 px-6 w-fit"
      >
        Debug Workouts
      </button> */}

      {/* <button
        onClick={debugMonday}
        type="submit"
        className="bg-red-400 font-bold text-white py-3 px-6 w-fit"
      >
        Debug Monday
      </button> */}

      <form onSubmit={handleSubmit} className="flex justify-center">
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
