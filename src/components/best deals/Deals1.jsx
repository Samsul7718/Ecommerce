import React, { useState } from 'react'
// import Deals_Card from './Deals_Card'
import { shirt,pant,T_shirt,formal} from '../../assets'
import { burkha,saree,kurti,long,cheast} from '../../assets'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images=[shirt,pant,T_shirt,formal,burkha,saree,kurti,long,cheast]
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
    <section id ='102' className='relative w-full px-4 bg-sky-100'>
       
       <div className=" relative p-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">best deal for the week</h2>
            <p className="text-gray-600 mt-2 md:text-lg">choice is yours</p>
        </div>

         <div className="flex gap-4 overflow-x-auto scrollbar-hide p-4">
    {images.map((img, index) => (
      <div
        key={index}
        className="min-w-[200px] flex-shrink-0 rounded-lg overflow-hidden shadow-md"
      >
        <img
          src={img}
          alt=""
          className="w-full h-40 object-cover"
        />
      </div>
    ))}
  </div>
         {/* <div className='absolute inset-0'> */}
        {/* <div
          className="relative grid grid-cols-5 gap-4 overflow-x-auto p-4"
        >
            <img src={images[currentIndex]} alt=""  className="w-40px h-full object-cover" />
        </div> */}
       {/* </div> */}

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