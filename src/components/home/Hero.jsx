import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hero,hero1,hero2,hero3 } from '../../assets';

const images=[hero,hero1,hero2,hero3]
const Hero = () => {
  const [currentIndex, setCurrentIndex] =useState(0);

  const prevSlide=()=>{
      setCurrentIndex((prevIndex)=>
        prevIndex===0? images.length-1:prevIndex-1
      );
  }
   const nextSlide=()=>{
    setCurrentIndex((prevIndex)=>
    currentIndex===images.length-1? 0:prevIndex+1);
  }
  return (
   <section id='101' className='relative w-full h-screen overflow-hidden'>
       {/* background overlay */}
       <div className='absolute inset-0'>
        <div
          className="absolute inset-0 bg-cover bg-center"
        >
            <img src={images[currentIndex]} alt=""  className="w-full h-full object-cover" />
        </div>
          {/* Gradient fade (image -> skyblue) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-100"></div>
       </div>
         {/* Content Center */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold drop-shadow-md">Welcome to Shop)(Mate</h1>
        <p className="mt-4 text-lg drop-shadow-md">
          Discover amazing shopping  experiences with us!
        </p>
      </div>

        {/* Left Arrow */}
      <button 
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-25 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-20">
        <ChevronLeft className="text-black" size={26} />
      </button>

      {/* Right Arrow */}
      <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-25 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-20">
        <ChevronRight className="text-black" size={26} />
      </button>
   </section>
  )
}

export default Hero