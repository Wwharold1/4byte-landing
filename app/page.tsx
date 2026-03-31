"use client";
import dynamic from "next/dynamic";

const Init = dynamic(() => import("./init"), {
  ssr: false,
});

export default function Page() {
  return <Init />;
}