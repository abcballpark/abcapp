"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onSubmit = (params: any) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return <></>;
}
