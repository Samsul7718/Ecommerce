import React from 'react'
import {images} from '../best deals/Deals3_Img'

const Deals3 = () => {
  return (
    <section className='bg-sky-100'>
        <div className='relative p-4 text-start'>
            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Amazing offer on vanity | Get upto 45% off on various vanity</h2>
        </div>
        <div className='flex gap-1 overflow-x-hidden scroll-smooth p-4'>
          {images.map((img,index)=>(
            <div
            key={index}
            className='min-w-[200px] shrink-0 rounded-lg overflow-hidden shadow-md'
            >
                <img src={img.src} alt="vanity loading..." 
                className='w-full h-40 object-cover'
                /> 
            </div>
          ))}
         
        </div>
        <button>left</button>
        <button>right</button>
    </section>
  )
}

export default Deals3