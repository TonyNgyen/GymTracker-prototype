import React from "react";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div>
      <form>
      <input
          type="text"
          name="fullname"
          id="1"
          placeholder="Full Name"
          className="border border-black"
        />
        <input
          type="text"
          name="email"
          id="1"
          placeholder="Email"
          className="border border-black"
        />
        <input
          type="password"
          name="text"
          id="2"
          placeholder="Password"
          className="border border-black"
        />
        <button className="bg-green-400 px-6 py-2">Register</button>
        <div className="bg-red-400 px-6 py-2 w-fit">Erorr Message</div>
      </form>
      <Link href={"/login"}>
        Already have an? <span className="underline ">Login</span>
      </Link>
    </div>
  );
}
