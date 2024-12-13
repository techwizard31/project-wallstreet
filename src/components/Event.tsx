"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Event {
  title: string;
  description: string;
}

const eventsData: Event[] = [
  {
    title: "National Entrepreneurship Summit 2025",
    description:
      "The flagship event of E-Cell NIT Rourkela, NES 2025, is a three-day extravaganza connecting startups, students, entrepreneurs, and investors. With engaging workshops, panel discussions, and networking opportunities, NES fosters innovation and drives entrepreneurial growth on a national scale."
  },
  {
    title: "Podcast Series: What The Idea",
    description:
      '"What The Idea" is an inspiring podcast series by E-Cell NIT Rourkela that dives into the minds of successful entrepreneurs and industry leaders. Each episode uncovers unique stories, challenges, and innovative solutions that can spark your next big idea.',
  },
  {
    title: "Startup 101: Entrepreneurship Classes",
    description:
      "Startup 101 is a comprehensive initiative aimed at guiding aspiring entrepreneurs through the fundamentals of building a successful venture. From idea validation to fundraising, these classes equip participants with practical knowledge and skills to navigate the startup ecosystem."
  },
];

function Event() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section id="Events" className="pb-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl md:text-6xl flex justify-center p-10 font-bold">
          Events
        </h2>

        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-4 ">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-[#0064E0] rounded-lg shadow-md group overflow-hidden w-[18rem] md:w-auto h-[24rem] cursor-pointer transition-all duration-500 ease-in-out "
            >
              {/* Hover Overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-start p-6 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out">
                <Image
                  src="/Nav_Assests/image1-removebg.png"
                  alt={event.title}
                  width={50}
                  height={50}
                  className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500  ml-[-0.5rem] "
                />
                <h3 className=" text-[#0064E0] font-bold text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {event.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {event.description}
                </p>
              </div>

              {/* Initially Centered Title */}
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl md:text-2xl transition-opacity duration-500 group-hover:opacity-0 px-4 text-center">
                {event.title}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white rounded-lg transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Event;
