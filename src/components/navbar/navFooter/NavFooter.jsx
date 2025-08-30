import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { navbarData } from '../../../data/navbarData'
import { FiMenu } from 'react-icons/fi';

const NavFooter = () => {
    const location=useLocation();
  return (
    <section className='w-full bg-gray-100 h-14 flex items-center justify-between font-bold my-2  px-4 shadow-md'>
         {/* only for "All" */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <FiMenu size={18} />
          <Link
            to="/"
            className={`transition ${
              location.pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"
            }`}
          >
            All
          </Link>
        </div>
        {navbarData
        .filter((item) => item.name !== "All") 
        .map((data,index)=>
          index <= 9 ? (
            <Link 
             key={index}
            to={data.path}
             className={`text-sm font-medium hover:text-blue-600 transition ${
            location.pathname === data.path ? "text-blue-600 font-semibold" : "text-gray-700"
          }`}
            >
            {data.name}
            
            </Link>
        )
        : null)}
    </section>
  )
}

export default NavFooter