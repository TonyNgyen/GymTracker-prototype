import WorkoutScheduleList from "@/components/WorkoutScheduleList";
import Link from "next/link";

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
          href={"/addWorkoutSchedule"}
          className="bg-indigo-200 py-4 px-4 rounded-xl inline-block ml-3 text-lg"
        >
          Add workout schedule
        </Link>
        <Link
          href={"/login"}
          className="bg-indigo-200 py-4 px-4 rounded-xl inline-block ml-3 text-lg"
        >
          Login
        </Link>
      </section>
      <WorkoutScheduleList day={weekday[day]} />
    </>
  );
}
