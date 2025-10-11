import React from 'react'
import {images} from '../best deals/Deals3_Img'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Deals3 = () => {
    const scrollLeft=()=>{

    }

    const scrollRight=()=>{
        
    }
  return (
    <section className='relative w-full px-4 bg-sky-100'>
        <div className='relative p-4 text-start'>
            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Amazing offer on vanity | Get upto 45% off on various vanity</h2>
        </div>
        <div className='flex overflow-x-hidden scroll-smooth p-4'>
          {images.map((img,index)=>(
            <div
            key={index}
            className='min-w-[200px] shrink-0  overflow-hidden shadow-md'
            >
                <img src={img.src} alt="vanity loading..." 
                className='w-full h-42 object-cover'
                /> 
            </div>
          ))}
         
        </div>
        <button
        onClick={scrollLeft}
        className=''
        >
             <ChevronLeft className="text-black" size={24} />
        </button>
        <button
         onClick={scrollRight}
         className=''
        >
             <ChevronRight className="text-black" size={24} />
        </button>
    </section>
  )
}

export default Deals3