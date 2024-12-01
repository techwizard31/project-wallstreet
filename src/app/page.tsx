import Image from "next/image";
import About from "./components/About";
import Event from "./components/Event";
import Loading from "./loading";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <About/>
        <Event/>
      </Suspense>
    </>
  );
}
