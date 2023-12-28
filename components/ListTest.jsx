import React from "react";
import ScheduleSelect from "./ScheduleSelect";

export default async function ListTest({ day, workouts }) {
  return (
    <>
      {Object.keys(workouts).length == true && (
        <ScheduleSelect schedule={workouts} day={day} />
      )}
      {!Object.keys(workouts).length && (
        <section className="bg-indigo-200 p-10 flex justify-center w-1/2 mx-auto rounded-md">
        <h1 className="text-4xl">There are no workouts to display</h1>
        </section>
        )}
    </>
  );
}
