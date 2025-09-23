import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../best deals/Deals2_Img'
import { ChevronLeft, ChevronRight } from 'lucide-react'

 
const Deals2 = () => {
  const containerRef = useRef(null);
  const navigate=useNavigate();

  const scrollLeft=()=>{
    if(containerRef.current){
      const containerWidth=containerRef.current.offsetWidth; // width + gap
      containerRef.current.scrollBy({left:-containerWidth, behavior:"smooth"})
    }
  }
   const scrollRight=()=>{
      if(containerRef.current){
      const containerWidth=containerRef.current.offsetWidth;
      containerRef.current.scrollBy({left:containerWidth, behavior:"smooth"})
    }
  }
  return (
    <section id='' className='relative w-full px-4 bg-sky-100'>
         <div className=" relative p-4 text-start">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Great Deal | Get upto 45% off on essential kitchen</h2>
        </div>
        <div 
        ref={containerRef}
        className='flex gap-4 overflow-x-hidden scroll-smooth p-4'
        style={{scrollSnapAlign:"start"}}
        >
          {images.map((img,index)=>(
            <div key={index}
            className='min-w-[200px] shrink-0 rounded-lg overflow-hidden shadow-md'
            >
             <img
             src={img.src}
             onClick={()=>navigate(img.link)}
             alt="kitchenImg loading..."
             className='w-full h-40 object-cover'
             />
            </div>
          ))}
        </div>

        <button
        onClick={scrollLeft}
        className='absolute left-4 top-3/6 -translate-y-2 bg-white/60 rounded-full p-3 hover:bg-white shadow-md z-20'>
        <ChevronLeft className="text-black" size={24} />
        </button>

        <button
        onClick={scrollRight}
        className='absolute right-4 top-3/6 -translate-y-2 bg-white/60 rounded-full p-3 hover:bg-white shadow-md z-20'>
        <ChevronRight className="text-black" size={24} />
        </button>

    </section>
  )
}

export default Deals2