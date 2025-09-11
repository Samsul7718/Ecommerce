import React from 'react'
import { hero3 } from '../../assets'

const ClientCard = ({title,subTitle}) => {
  return (
    <section className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 mt-2 md:text-lg">Testimonials from our satisfied customers</p>
        </div>
        <div className='p-2 grid grid-cols-2 gap-6 '>
            <div>
                <img src={hero3} alt=""  className="w-full h-24 object-cover rounded-md"/>
                  <p className="text-gray-600 mt-2 md:text-xs mx-8">Testimonials</p>
            </div>
            
            <img src={hero3} alt=""  className="w-full h-24 object-cover rounded-md"/>
            <img src={hero3} alt=""  className="w-full h-24 object-cover rounded-md"/>
            <img src={hero3} alt=""  className="w-full h-24 object-cover rounded-md"/>
        </div>
        <div className='p-4 text-center space-between flex gap-20 justify-center'>
            <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-700 hover:text-white
             px-1 py-1">
                See More...
            </button>
            <button className="bg-green-500 text-black px-2 py-2 rounded hover:bg-green-700 hover:text-white
             px-1 py-1">
                Add to Cart
            </button>
        </div>
        
   </section>
  )
}

export default ClientCard