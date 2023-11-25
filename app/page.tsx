import WorkoutList from "@/components/WorkoutList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        href={"/addWorkout"}
        className="bg-indigo-200 py-4 px-4 rounded-xl inline-block"
      >
        Add workout
      </Link>
      <Link
        href={"/addWorkoutSchedule"}
        className="bg-indigo-200 py-4 px-4 rounded-xl inline-block"
      >
        Add workout schedule
      </Link>
      <WorkoutList />
    </>
  );
}
