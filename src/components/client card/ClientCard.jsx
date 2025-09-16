import React from 'react'
// import { hero3 } from '../../assets'

const ClientCard = ({title,subTitle,items}) => {
  return (
    <section className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2 md:text-lg">{subTitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {items.map((item)=>(
            <div key={item.id} className="p-2 rounded hover:shadow-md transition">
                <img src={item.src} alt={item.title}  className="w-full h-24 object-cover rounded-md aspect-[4/3]" />
                  <p className="text-gray-600 mt-2 md:text-xs mx-8">{item.title}</p>
            </div>
        
            ))}
        </div>
        <div className='p-4 text-center space-between flex gap-20 justify-center'>
            <button className="bg-gray-200 text-black px-2 py-2 rounded hover:bg-gray-700 hover:text-white
             px-1 py-1">
                See More...
            </button>
            {/* <button className="bg-green-500 text-black px-2 py-2 rounded hover:bg-green-700 hover:text-white
             px-1 py-1">
                Add to Cart
            </button> */}
        </div>
        
   </section>
  )
}

export default ClientCard