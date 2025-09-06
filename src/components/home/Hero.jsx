import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hero } from '../../assets';

const Hero = () => {
  return (
   <section className='relative w-full h-screen overflow-hidden'>
       {/* background overlay */}
       <div className='absolute inset-0'>
        <div
          className="absolute inset-0 bg-cover bg-center"
        //   style={{
        //     backgroundImage:
        //       "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        //   }}
        >
            <img src={hero} alt="" />
        </div>
          {/* Gradient fade (image -> skyblue) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-200"></div>
       </div>
         {/* Content Center */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold drop-shadow-md">Welcome to Shop)(Mate</h1>
        <p className="mt-4 text-lg drop-shadow-md">
          Discover amazing shopping  experiences with us!
        </p>
      </div>

        {/* Left Arrow */}
      <button className="absolute left-4 top-1/2 -translate-y-25 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-0">
        <ChevronLeft className="text-black" size={24} />
      </button>

      {/* Right Arrow */}
      <button className="absolute right-4 top-1/2 -translate-y-25 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-0">
        <ChevronRight className="text-black" size={24} />
      </button>
   </section>
  )
}

export default Hero