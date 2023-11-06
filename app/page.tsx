import WorkoutList from "@/components/WorkoutList";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Link href={"/addWorkout"}>Add workout</Link>
      <WorkoutList />
    </>
  );
}
