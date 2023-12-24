"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button className="bg-green-400 px-6 py-2">Login</button>
        {error && <div className="bg-red-400 px-6 py-2 w-fit">{error}</div>}
      </form>
      <Link href={"/register"}>
        Don't have an account? <span className="underline ">Register</span>
      </Link>
    </div>
  );
}
