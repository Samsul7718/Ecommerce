import React from 'react'
import { hero3 } from '../../assets'

const ClientCard = () => {
  return (
    <section className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 mt-2 md:text-lg">Testimonials from our satisfied customers</p>
        </div>
        <div className='p-4'>
            <img src={hero3} alt=""  className="w-full h-48 object-cover rounded-md"/>
        </div>
        <div className='p-4 text-center'>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
        
   </section>
  )
}

export default ClientCard