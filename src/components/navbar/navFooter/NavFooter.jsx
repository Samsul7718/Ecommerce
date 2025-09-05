import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import { navbarData } from '../../../data/navbarData'
import { FiArrowLeft, FiChevronDown, FiChevronUp, FiMenu,FiShoppingCart,FiUser,FiX } from 'react-icons/fi';

const NavFooter = () => {
   const [menuOpen, setMenuOpen] = useState(false);
     const [showMore, setShowMore] = useState(false);
      const [activeMenu, setActiveMenu] = useState("main"); 
      // const [activeMenu2, setActiveMenu2] = useState("main2"); 
    const location=useLocation();
  return (
    <section className=' w-full bg-gray-65 h-16 '>
      <div className=' hidden md:flex flex-row items-center justify-between font-bold py-4 px-4 shadow-sm '>
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
                     className={` md:hidden fixed top-0 left-0 w-4/6 h-5/6 bg-black/65 backdrop-blur-sm 
                      overflow-x-hidden  border-r border-white/10  shadow-lg transition-transform duration-300 z-50 ${
                       menuOpen ? "translate-x-0" : "-translate-x-full"
                     }`}
                   >
             
                     {/* Menu Items */}
                  
                       <div className=" sticky top-0 left-0 w-full h-12 bg-bodyColor text-white flex items-center space-between
                        gap-8 px-8 z-50 shadow-md">
                         <Link to="/login">
                         <FiUser  className='text-3xl'/> 
                          </Link>
                         <span className='text-xl'>Hello, sign in</span>
                       </div>
                       
                     <div className=" h-96 mt-8 flex flex-col  text-gray-300 gap-6 ">
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
                         <div className=' flex flex-col w-full gap-2'>
                          {activeMenu === "main" && (
                        <>
                       <div className='cursor-pointer text-2xl font-base px-6'>Shop by Category</div>
                         
                       <div 
                       onClick={()=>setActiveMenu("mobiles")}
                       className='relative overflow-x-hidden cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2 '>
                        <span className='px-6'>Mobiles, Computers</span>
                      </div> 
             
                       <div 
                        onClick={()=>setActiveMenu("TV")}
                       className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>TV, Appliances, Electronics</span>
                        </div>
                       
                        <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>Men's Fashion</span>
                        </div>
                        </Link>
                        <Link to="/login">
                       <div className='cursor-pointer text-md  hover:text-black hover:bg-gray-100 px-2 py-2'>
                        <span className='px-6'>Women's Fashion</span>
                        </div>
                        </Link>
                    {/* Show More Items */}
                     {showMore && (
                     <>
                       <Link to="/login">
                     <div className="cursor-pointer text-md hover:text-black hover:bg-gray-100 px-2 py-2">
                     <span className="px-6">Kids' Fashion</span>
                   </div>
                     </Link>
                      <Link to="/login">
                       <div className="cursor-pointer text-md hover:text-black hover:bg-gray-100 px-2 py-2">
                      <span className="px-6">Footwear</span>
                   </div>
                   </Link>
                     <Link to="/login">
                     <div className="cursor-pointer text-md hover:text-black hover:bg-gray-100 px-2 py-2">
                     <span className="px-6">Watches & Accessories</span>
                   </div>
                   </Link>
                    <Link to="/login">
                    <div className="cursor-pointer text-md hover:text-black hover:bg-gray-100 px-2 py-2">
                     <span className="px-6">Jewellery</span>
                     </div>
                   </Link>
                 </>
                 )}
               {/* Toggle Button */}
                   <div
               onClick={() => setShowMore(!showMore)}
               className="cursor-pointer text-md hover:text-black hover:bg-gray-100 px-2 py-2 text-blue-400"
             >
               <div className="px-0">
                 {showMore ? 
                 <span className="px-6 flex items-center gap-2">
                    See less <FiChevronUp />
                 </span> 
                   : 
                  <span className="px-6 flex items-center gap-2">
                    See all <FiChevronDown />
                </span>}
                  </div>
                  </div>
                </>
                          )}
                       </div>
                       <div className='cursor-pointer text-2xl font-base px-6'>Help & Settings</div>
                        <div className='cursor-pointer py-2 text-gray-300 hover:text-black hover:bg-gray-100 px-6'>
                                   <Link to={"/returnorder"}>
                                   Return & Order
                                   </Link>
                          </div>
                        
                       <div className="flex items-center hover:text-black hover:bg-gray-100 gap-2 px-6 py-2">
                          <Link to="/cart" className="flex items-center gap-2">
                         <FiShoppingCart /><span>Cart (0)</span>
                           </Link>
                       </div>
                      
                      
                     </div>
               
                   </div>

                 {/* SUB MENU: Mobiles */}
    {activeMenu === "mobiles" && (
      <div className="fixed top-0 left-0 w-4/6 h-5/6 bg-black/90 z-50 overflow-y-auto transition-transform duration-300">
       
           {/* Menu Items */}
                  
           <div className=" sticky top-0 left-0 w-full h-12 bg-bodyColor text-white flex items-center space-between
             gap-8 px-8 z-50 shadow-md">
              <Link to="/login">
              <FiUser  className='text-3xl'/> 
               </Link>
                <span className='text-xl'>Hello, sign in</span>
              </div>
                        {/* Header with Back Button */}
        <div className="flex items-center text-white  gap-3 px-6 py-4 border-b border-gray-300">
          <button onClick={() => setActiveMenu("main")} className="text-xl">
            <FiArrowLeft />
          </button>
          <span className="text-xl font-bold">MAIN MENU</span>
        </div>

        {/* Submenu Items */}
        <div className="flex flex-col text-white gap-4  py-4">
          <div className="cursor-pointer text-xl font-base px-6">Mobiles Tablets & More</div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>All Mobile Phones</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>All Mobile Accessories</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Cases & Cover</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Power Banks</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Tablets</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Smart Home</span></div>
        </div>

        <div className="flex flex-col text-white gap-4  py-4">
          <div className="cursor-pointer text-xl font-base px-6">Computers & Accessories</div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>All Computers & Accessories</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Laptops</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Printer & Ink</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Networking Devices</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Monitors</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Desktops</span></div>
        </div>
      </div>
    )}

                  {/* SUB MENU: TV */}
    {activeMenu === "TV" && (
      <div className="fixed top-0 left-0 w-4/6 h-5/6 bg-black/90 z-50 overflow-y-auto transition-transform duration-300">
       
           {/* Menu Items */}
                  
           <div className=" sticky top-0 left-0 w-full h-12 bg-bodyColor text-white flex items-center space-between
             gap-8 px-8 z-50 shadow-md">
              <Link to="/login">
              <FiUser  className='text-3xl'/> 
               </Link>
                <span className='text-xl'>Hello, sign in</span>
              </div>
                        {/* Header with Back Button */}
        <div className="flex items-center text-white  gap-3 px-6 py-4 border-b border-gray-300">
          <button onClick={() => setActiveMenu("main")} className="text-xl">
            <FiArrowLeft />
          </button>
          <span className="text-xl font-bold">MAIN MENU</span>
        </div>

        {/* Submenu Items */}
        <div className="flex flex-col text-white gap-4  py-4">
          <div className="cursor-pointer text-xl font-base px-6">TV, Audios & Cameras</div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Televisions</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Home Entertainment system</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Headphones</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Speakers</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Cameras</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Camera Accessories</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Musical Instruments</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>All Electronics</span></div>
        </div>

        <div className="flex flex-col text-white gap-4  py-4">
          <div className="cursor-pointer text-xl font-base px-6">Appliances</div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Air Conditioners</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Refrigerators</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Washing Machines</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Kitchen & Home Appliances</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Monitors</span></div>
          <div className="cursor-pointer  hover:text-black hover:bg-gray-100 px-2 py-2 text-md"> <span className='px-6'>Desktops</span></div>
        </div>
      </div>
    )}


                   {menuOpen && (
                    <button
                      className="fixed top-4 right-40 text-orange-200 bg-black text-4xl border 
                      hover:border-white hover:bg-yellow-400 z-[60]"
                    onClick={() => setMenuOpen(false)}
                  >
                  <FiX />
                  </button>
                  )}
    </section>
  )
}

export default NavFooter