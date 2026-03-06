"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function DetailsButton({ id }) {
  console.log(id);
  const router = useRouter();

  return (
    <button
      className="border-2 border-green-900 bg-green-800 p-1 rounded-2xl "
      type="button"
      onClick={() => router.push(`/student/${id}`)}
    >
      Get Details
    </button>
  );
}
