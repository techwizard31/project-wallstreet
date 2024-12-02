"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function CountUp({ end, trigger }: { end: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    setCount(0); // Reset the count each time trigger is true
    let current = 0;
    const increment = Math.ceil(end / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [end, trigger]);

  return <span className="text-xl md:text-4xl">{count.toLocaleString()}</span>;
}

function About() {
  const [triggerCount, setTriggerCount] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerCount(true); // Trigger animation
          } else {
            setTriggerCount(false); // Reset to ensure re-trigger
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="About" ref={aboutRef}>
      <div className="text-[#0064E0] text-6xl flex justify-center p-10">About Us</div>
      <div className="p-8 pt-10 font-[poppins] text-xl lg:p-16 flex justify-center pb-16 text-center">
        Entrepreneurship Cell, NIT Rourkela is an endeavor of the institute through the student body to encourage "Innovation, Incubation and Entrepreneurship." It was founded in 2007 and operates under Technical Society, SAC. Its main objective is to promote and support entrepreneurship by developing entrepreneurial traits among the students and helping budding entrepreneurs achieve their goals. To encourage entrepreneurship, ECell at NITR organizes various events and supports budding talents in the race for finding their dream venture. The major initiatives taken by ECell are National Entrepreneurship Summit, Arthayan and Weekend activities. ECell also organizes entrepreneurship based activities during weekends throughout the year. Such activities have two main motives: promote the entrepreneurial culture among students and support the already confident students in their run towards entrepreneurship.
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10 text-center">
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031788/vxpelexapiilpx2ea2dt.png"
              alt="students"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={1000} trigger={triggerCount} />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">STUDENTS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031829/ejgkbujnve7ucg71pjtn.png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={20000} trigger={triggerCount} />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">SPEAKERS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031850/c8zubzp0auwolg1sbpzm.png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={50000} trigger={triggerCount} />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">STARTUPS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031866/wkd5g56ao9mewqhhqg2n.png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CountUp end={100000} trigger={triggerCount} />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">INVESTORS</span>
        </div>
      </div>
    </div>
  );
}

export default About;
