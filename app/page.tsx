import WorkoutList from "@/components/WorkoutList";
import WorkoutScheduleList from "@/components/WorkoutScheduleList";
import Link from "next/link";

export default function Home() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
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
      <h1 className="text-4xl font-bold text-center mb-8">Today is {weekday[day]}</h1>
      {/* <WorkoutList /> */}
      <WorkoutScheduleList day={weekday[day]}/>
    </>
  );
}
