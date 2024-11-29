"use client";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      <div className="text-[#0064E0] text-6xl flex justify-center p-10">About Us</div>
      <div className="p-16 pt-10 font-[poppins] text-xl flex justify-center pb-16 text-center">
        Entrepreneurship Cell, NIT Rourkela is an endeavor of the institute through the student body to encourage "Innovation, Incubation and Entrepreneurship." It was founded in 2007 and operates under Technical Society, SAC. Its main objective is to promote and support entrepreneurship by developing entrepreneurial traits among the students and helping budding entrepreneurs achieve their goals. To encourage entrepreneurship, ECell at NITR organizes various events and supports budding talents in the race for finding their dream venture. The major initiatives taken by ECell are National Entrepreneurship Summit, Arthayan and Weekend activities. ECell also organizes entrepreneurship based activities during weekends throughout the year. Such activities have two main motives: promote the entrepreneurial culture among students and support the already confident students in their run towards entrepreneurship.
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10 text-center">
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Layer_2.png"
              alt="students"
              width={200}
              height={200}
              className="mx-auto"
            />
            <Image
              src="/1K+.png"
              alt="students"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">STUDENTS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Layer_1.png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <Image
              src="/20+.png"
              alt="students"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">SPEAKERS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Layer_1 (1).png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <Image
              src="/50+.png"
              alt="students"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">STARTUPS</span>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Layer_1 (2).png"
              alt="entrepreneurship"
              width={200}
              height={200}
              className="mx-auto"
            />
            <Image
              src="/100+.png"
              alt="students"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4">INVESTORS</span>
        </div>
      </div>
    </div>
  );
}

export default About;
