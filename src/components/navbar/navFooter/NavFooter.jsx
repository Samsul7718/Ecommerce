import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import { navbarData } from '../../../data/navbarData'
import { FiMenu,FiShoppingCart,FiUser,FiX } from 'react-icons/fi';

const NavFooter = () => {
   const [menuOpen, setMenuOpen] = useState(false);
    const location=useLocation();
  return (
    <section className=' w-full bg-gray-65 h-16 '>
      <div className='hidden md:flex flex-row items-center justify-between font-bold py-4 px-4 shadow-sm '>
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
       
      </div>
             {/* Mobile Hamburger Icon (hidden on desktop) */}
                    <button
                      className="md:hidden text-black-300  text-xl"
                      onClick={() => setMenuOpen(true)}
                    >
                    <div className="flex items-center pt-5 px-2 cursor-pointer hover:text-blue-400">
                      <FiMenu /><span>All</span>
                      </div>
                    </button>
        
                     {/* Mobile Menu Overlay */}
                <div
                className={`md:hidden fixed top-0 left-0 bottom-0 right-0 transition-opacity duration-300  ${
                  menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setMenuOpen(false)}>
        
                </div>

            {/* Mobile Slide-in Menu */}
                   <div
                     className={`md:hidden fixed top-0 left-0 w-3/5 h-3/4 bg-black/65 backdrop-blur-sm border-r
                       border-white/10  shadow-lg transition-transform duration-300 z-50 ${
                       menuOpen ? "translate-x-0" : "-translate-x-full"
                     }`}
                   >
                     {/* Close Button */}
                     <button
                       className={`absolute  text-orange-200 top-4 bg-black -right-10 text-4xl border hover:border-white 
                        hover:bg-yellow-400 ${menuOpen ? "visible" : "invisible"}`}
                       onClick={() => setMenuOpen(false)}
                     >
                       {/* border hover:border-white transition */}
                       <FiX />
                     </button>
             
                     {/* Menu Items */}
                  
                       <div className="w-full h-12 bg-bodyColor text-white flex items-center space-between gap-8 px-8">
                         <Link to="/login">
                         <FiUser  className='text-3xl'/> 
                          </Link>
                         <span className='text-xl'>Hello, sign in</span>
                       </div>
                       
                     <div className="mt-8 flex flex-col  text-gray-300 gap-6 ">
                       <div className=' flex flex-col w-full gap-2'>
                       <div className='cursor-pointer text-2xl font-base px-6'>Trending</div>
                       <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>Bestsellers</span>
                        </div>
                        </Link>
                         <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>New Releases</span>
                        </div>
                        </Link>
                        <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>Movers and Shakers</span>
                        </div>
                        </Link>
                       </div>
                          <div className=' flex flex-col w-full gap-2'>
                       <div className='cursor-pointer text-2xl font-base px-6'>Digital Content and Devices</div>
                        <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>Fire TV</span>
                        </div>
                        </Link>
                         <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>Kindle E-Readers & eBooks</span>
                        </div>
                        </Link>
                        <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>Audiable Audiobooks</span>
                        </div>
                        </Link>
                       </div>
                       <div className='cursor-pointer text-xl font-base'>Shop by Category</div>
                       <div className='cursor-pointer text-xl font-base'>Help & Settings</div>
                       
                       <div className="flex items-center gap-2">
                         <FiShoppingCart /><span>Cart (0)</span>
                       </div>
                      
                     </div>
               
                   </div>
 {/* </div> */}
    </section>
  )
}

export default NavFooter