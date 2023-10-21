import WorkoutList from "@/components/WorkoutList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Link href={"/addWorkout"}>Add workout</Link>
      <WorkoutList />
    </>
  );
}
