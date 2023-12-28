"use client";

import React, { useState } from "react";
import DayDisplay from "./DayDisplay";

function ScheduleSelect({ schedule, day }) {
  const [select, setSelect] = useState(Object.keys(schedule)[0]);
  return (
    <>
      <article className="flex text-center justify-center mb-10">
        <DayDisplay day={day} />
        <select
          onChange={(e) => setSelect(e.target.value)}
          className="text-4xl font-bold"
        >
          {Object.keys(schedule).map((name) => (
            <option key="1">{name}</option>
          ))}
        </select>
      </article>
      {!schedule[select][day]["rest"] && (
        <section className="md:mx-32 lg:mx-80">
          <div className="grid grid-cols-3 text-center text-4xl font-bold mb-4">
            <h1>Workouts</h1>
            <h1>Sets</h1>
            <h1>Reps</h1>
          </div>
          {schedule[select][day].map((w) => (
            <div
              key={w.id}
              className="bg-indigo-200 bordered rounded-2xl grid-cols-3 grid text-center py-4 text-2xl mb-2"
            >
              <p>{w.name}</p>
              <p>{w.sets}</p>
              <p>{w.reps}</p>
            </div>
          ))}
        </section>
      )}
      {schedule[select][day]["rest"] && (
        <section className="flex justify-center">
          <h1 className="text-5xl">Today is a rest day</h1>
        </section>
      )}
    </>
  );
}

export default ScheduleSelect;
