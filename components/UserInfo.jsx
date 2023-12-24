"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

  const  {data:session} = useSession();

  return (
    <div>
      <div>Name: {session?.user?.name}</div>
      <div>Email: {session?.user?.email}</div>
      <button onClick={() => signOut()} className="py-2 px-4 bg-red-400">
        Log Out
      </button>
    </div>
  );
}
