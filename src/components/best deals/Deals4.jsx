import React from 'react'
import {images} from '../best deals/Deals4_Img'

const Deals4 = () => {
  return (
    <section>
      <div>
        <h2 className='font-semibold text-xl md:text-2xl text-gray-800'>Great deals on sesons Festivals | Get upto 55% off on office chair</h2>
      </div>
      <div>
        {images.map((img,index)=>(
          <div
          key={index}
          className=''>
          <img
          className=''
          src={img.src}
          alt="" 
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