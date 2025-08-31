import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import { navbarData } from '../../../data/navbarData'
import { FiMenu,FiShoppingCart,FiUser,FiX } from 'react-icons/fi';

const NavFooter = () => {
   const [menuOpen, setMenuOpen] = useState(false);
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

      {/* Mobile Slide-in Menu */}
                   <div
                     className={`md:hidden fixed top-0 right-0 w-2/6 h-1/2 bg-black/65 backdrop-blur-md border-l 
                       border-white/10  shadow-lg transition-transform duration-300 z-50 ${
                       menuOpen ? "translate-x-0" : "translate-x-full"
                     }`}
                   >
                     {/* Close Button */}
                     <button
                       className="absolute  text-orange-200 top-4 left-4 text-3xl border hover:border-white hover:bg-yellow-400 transition"
                       onClick={() => setMenuOpen(false)}
                     >
                       {/* border hover:border-white transition */}
                       <FiX />
                     </button>
             
                     {/* Menu Items */}
                   
                     <div className="mt-16 flex flex-col  text-gray-300 gap-6 px-6">
                       <Link to="/login">
                       <div className="flex items-center gap-2">
                         <FiUser /> <span>Profile</span>
                       </div>
                        </Link>
                       <div className='cursor-pointer'><Link to="/returnorder">Return & Order</Link></div>
                         <Link to="/cart">
                       <div className="flex items-center gap-2">
                         <FiShoppingCart /> <span>Cart (0)</span>
                       </div>
                        </Link>
                     </div>
               
                   </div>

    </section>
  )
}

export default NavFooter