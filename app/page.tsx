import WorkoutList from "@/components/WorkoutList";
import WorkoutScheduleList from "@/components/WorkoutScheduleList";
import Link from "next/link";
import ScheduleSelect from "@/components/ScheduleSelect";

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

const getScheduleNames = async () => {
  let workoutSchedules = await getWorkoutSchedule();
  let workoutScheduleNames = [];
  for (let i = 0; i < workoutSchedules["workoutSchedule"].length; i++) {
    workoutScheduleNames.push(workoutSchedules["workoutSchedule"][i]["title"]);
  }
  return workoutScheduleNames;
};

export default async function Home() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const scheduleNames = await getScheduleNames();
  const day = new Date().getDay();
  return (
    <>
      <section className="text-center mb-8">
        <Link
          href={"/addWorkout"}
          className="bg-indigo-200 py-4 px-4 rounded-xl inline-block mr-3"
        >
          Add workout
        </Link>
        <Link
          href={"/addWorkoutSchedule"}
          className="bg-indigo-200 py-4 px-4 rounded-xl inline-block ml-3"
        >
          Add workout schedule
        </Link>
      </section>
      <h1 className="text-4xl font-bold text-center mb-8">
        Today is {weekday[day]}
      </h1>
      <select>
        <option>Test1</option>
        <option>Test2</option>
        <option>Test3</option>
        <option>Test4</option>
      </select>
      <ScheduleSelect />
      {/* <WorkoutList /> */}
      <WorkoutScheduleList day={weekday[day]} />
    </>
  );
}
