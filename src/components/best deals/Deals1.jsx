import React, { useState } from 'react'
// import Deals_Card from './Deals_Card'
import { shirt,pant,T_shirt,formal } from '../../assets'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images=[shirt,pant,T_shirt,formal]
const Deals1 = () => {
  const [currentIndex, setCurrentIndex] =useState(0);

  const prevSlide=()=>{
      setCurrentIndex((prevIndex)=>
        prevIndex===0? images.length-1:prevIndex-1
      );
  }
   const nextSlide=()=>{
      setCurrentIndex((prevIndex)=>
        currentIndex=== images.length-1? 0:prevIndex+1
      );
  }
  return (
    <section id ='102' className='relative flex flex-col w-full my-16 px-4 bg-sky-100'>
        <div className='absolute inset-0'>
      <div className="p-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">best deal for the week</h2>
            <p className="text-gray-600 mt-2 md:text-lg">choice is yours</p>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center"
        >
            <img src={images[currentIndex]} alt=""  className="w-full h-full object-cover" />
        </div>
       </div>

          {/* Left Arrow */}
      <button 
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-2 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-20">
        <ChevronLeft className="text-black" size={26} />
      </button>

      {/* Right Arrow */}
      <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-2 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-20">
        <ChevronRight className="text-black" size={26} />
      </button>

    </section>
  )
}

export default Deals1