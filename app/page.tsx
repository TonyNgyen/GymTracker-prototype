import WorkoutList from "@/components/WorkoutList";
import WorkoutScheduleList from "@/components/WorkoutScheduleList";
import Link from "next/link";
import ScheduleSelect from "@/components/ScheduleSelect";
import DayDisplay from "@/components/DayDisplay";

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
  const day = new Date().getDay();
  return (
    <>
      <section className="text-center mb-8">
        <Link
          href={"/addWorkout"}
          className="bg-indigo-200 py-4 px-4 rounded-xl inline-block mr-3 text-lg"
        >
          Add workout
        </Link>
        <Link
          href={"/addWorkoutSchedule"}
          className="bg-indigo-200 py-4 px-4 rounded-xl inline-block ml-3 text-lg"
        >
          Add workout schedule
        </Link>
      </section>
      {/* <ScheduleSelect /> */}
      {/* <WorkoutList /> */}
      <WorkoutScheduleList day={weekday[day]} />
    </>
  );
}
