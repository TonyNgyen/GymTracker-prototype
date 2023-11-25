import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-red-400 flex">
      <Link href={"/"} className="text-5xl font-bold bg-amber-900 inline-block">
        GymTracker
      </Link>
    </div>
  );
}

export default Navbar;
