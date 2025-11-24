"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="w-20 h-10 bg-white/5 rounded-lg animate-pulse" />;
  }

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition font-medium"
      >
        Logout
      </button>
    );
  }

  return (
    <Link
      href="/auth/login"
      className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-medium"
    >
      Login
    </Link>
  );
}
