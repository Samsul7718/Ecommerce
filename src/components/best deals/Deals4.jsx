import React,{useRef} from 'react'
import {images} from '../best deals/Deals4_Img'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Deals4 = () => {
  const containerRef=useRef(null);
  const scrollLeft=()=>{
      if(containerRef.current){
        const containerWidth=containerRef.current.ofsetWidth;
       containerRef.current.scrollBy({left:-containerWidth,behavior:"smooth"})
      }
  }
  const scrollRight=()=>{
    if(containerRef.current){
      const containerWidth=containerRef.current.ofsetWidth;
      containerRef.current.scrollBy({right:containerWidth,behavior:"smooth"})
    }
  }
  return (
    <section className='relative w-full px-4 bg-sky-100'>
      <div>
        <h2 className='font-semibold text-xl md:text-2xl text-gray-800'>Great deals on sesons Festivals | Get upto 55% off on office chair</h2>
      </div>
      <div
      ref={containerRef}
      className='flex overflow-x-hidden scroll-smooth p-4'>
        {images.map((img,index)=>(
          <div
          key={index}
          className='min-w-[200px] shrink-0 object-cover shadow-md'>
          <img
          className='w-full h-42 object-cover'
          src={img.src}
          alt="chair loading... " 
          />
        </div>
        ))}
        
      </div>
      <button
      onClick={scrollLeft}
      className='absolute left-4 top-3/6 -translate-y-2 bg-white/60 rounded-full p-3 shadow-md hover:bg-cyan-200'
      >
        <ChevronLeft className="text-black" size={24} />
      </button>
      <button
      onClick={scrollRight}
      className='absolute right-4 top-3/6 -translate-y-2 bg-white/60 rounded-full p-3 shadow-md hover:bg-cyan-200' 
      >
        <ChevronRight className="text-black" size={24} />
      </button>
    </section>
  )
}

export default Deals4