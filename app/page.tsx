import WorkoutList from "@/components/WorkoutList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/addWorkout"}>Add workout</Link>
      <Link href={"/addWorkoutSchedule"}>Add workout schedule</Link>
      <WorkoutList />
    </>
  );
}
