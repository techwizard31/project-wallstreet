'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Speaker {
  name: string
  title: string
  image: string
  image2:string
}

const speakers: Speaker[] = [
  {
    name: "Speaker",
    title: "V. Krishnan",
    image: "images/assets/Card vk.png",
    image2: "images/assets/v krishnan.png"
  },
  {
    name: "Speaker",
    title: "Ravi Ranjan",
    image: "images/assets/Card ravi.png",
    image2: "images/assets/ravi.png"
  },
  {
    name: "Speaker",
    title: "Mukesh Malik",
    image: "images/assets/Card mukesh.png",
    image2: "images/assets/mukesh.png" 
  },
  {
    name: "Speaker",
    title: "Rishi Singh",
    image: "images/assets/Card rishi.png",
    image2: "images/assets/rishi.png"  
  },
  {
    name: "Speaker",
    title: "Ishaan Sharma",
    image: "images/assets/Card ishaan.png",
    image2: "images/assets/ishaan.png" 
  },
  {
    name: "Speaker",
    title: "Bibin Babu",
    image: "images/assets/Card bibin.png",
    image2: "images/assets/bibin.png"
  },
  {
    name: "Speaker",
    title: "Arjun Malhotra",
    image: "images/assets/Card malhotra.png",
    image2: "images/assets/malhotra.png"
  },
  {
    name: "Speaker",
    title: "AK Mohanty",
    image: "images/assets/Card ak.png",
    image2: "images/assets/ak.png"
  }
]

export default function SpeakerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
  <main className='px-5 lg:px-28 mx-auto'>
  <div className=" w-full min-h-screen bg-black ">
  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-w-4xl w-full p-4">
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[3/4] overflow-hidden">
                <div>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="absolute w-full h-full object-fill"
                />
                <img
                  src={speaker.image2}
                  alt={""}
                  className="absolute w-full h-full object-cover grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-300"
                />
                </div>
                <div className="absolute z-10 p-6 flex flex-col">
                  <span className="text-blue-600 text-[17px] font-medium">
                    {speaker.name}
                  </span>
                  <h3 className="text-white text-3xl font-bold mt-2">
                    {speaker.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <button
      className="absolute top-[50%] left-[16px] -translate-y-[50%] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border-2 border-white-500"
      onClick={scrollPrev}
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
    <button
      className="absolute top-[50%] right-[16px] -translate-y-[50%] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border-2 border-white-500"
      onClick={scrollNext}
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
</div>
</main>
  )
}
