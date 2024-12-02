"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import About from "../components/About";
import Event from "../components/Event";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <About />
      <Event />
    </>
  );
}
