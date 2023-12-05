import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center py-10">
      <Link href={"/"} className="text-5xl font-bold  inline-block tracking-wider">
        GymTracker
      </Link>
    </div>
  );
}

export default Navbar;
