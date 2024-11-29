import Image from "next/image";
import About from "./components/About";
import Event from "./components/Event";
export default function Home() {
  return (
    <main className="">
     <About/>
     <Event/>
    </main>
  );
}
