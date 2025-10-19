import React from 'react'
import {images} from '../best deals/Deals4_Img'

const Deals4 = () => {
  return (
    <section>
      <div>
        <h2 className='font-semibold text-xl md:text-2xl text-gray-800'>Great deals on sesons Festivals | Get upto 55% off on office chair</h2>
      </div>
      <div className='flex overflow-x-hidden scroll-smooth p-4'>
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
      <button>left</button>
      <button>righ</button>
    </section>
  )
}

export default Deals4