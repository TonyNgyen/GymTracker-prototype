"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          id="1"
          placeholder="Full Name"
          className="border border-black"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          id="1"
          placeholder="Email"
          className="border border-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="text"
          id="2"
          placeholder="Password"
          className="border border-black"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-400 px-6 py-2">Register</button>
        {error && <div className="bg-red-400 px-6 py-2 w-fit">{error}</div>}
      </form>
      <Link href={"/login"}>
        Already have an account? <span className="underline ">Login</span>
      </Link>
    </div>
  );
}

//https://youtu.be/PEMfsqZ2-As?t=1897