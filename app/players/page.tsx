"use client";
import { trpc } from "@/app/trpc/client";

export default function Players() {
  const getStuff = trpc.getStuff.useQuery();

  return (
    <div>
      <div>{JSON.stringify(getStuff.data)}</div>
    </div>
  );
}
