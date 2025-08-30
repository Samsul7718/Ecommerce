import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { navbarData } from '../../../data/navbarData'

const NavFooter = () => {
    const location=useLocation();
  return (
    <section className='w-full bg-gray-100 h-14 flex items-center justify-between font-bold my-2  px-4 shadow-md'>
        {navbarData.map((data,index)=>(
            <Link 
             key={index}
            to={data.path}
             className={`text-sm font-medium hover:text-blue-600 transition ${
            location.pathname === data.path ? "text-blue-600 font-semibold" : "text-gray-700"
          }`}
            >
            {data.name}
            </Link>
        ))}
    </section>
  )
}

export default NavFooter