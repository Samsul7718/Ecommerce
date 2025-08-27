import React, { useEffect, useRef, useState } from 'react'
import { logo } from '../../../assets'
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiSearch, FiShoppingCart, FiStar, FiUser } from "react-icons/fi";
// import { FaChevronDown } from "react-icons/fa";

const NavHeader = () => {
    const cities = ["Kolkata","Hyderabad","Pune","vizaj","Amedabad","Kashmir", "Mumbai", "Delhi", "Chennai", "Bangalore"];
    const languages = ["English","Hindi","Spanish","French","German","Chinese","Japanese"];
    const allItems = ["Baby","Beauty","Electronics","Fashion","Home & Furniture","Grocery","Books & More"];
    
    const [selectedCity,setSelectedCity]=useState("")
    const [selectedLanguage,setSelectedLanguage]=useState("")
    const [selectedItem,setSelectedItem]=useState("")
    const [leftPadding, setLeftPadding] = useState(50); // default padding
     const leftBlockRef = useRef(null);

       // Measure width of "All + dropdown" and set padding
    useEffect(() => {
       if (leftBlockRef.current) {
    const textWidth = leftBlockRef.current.offsetWidth; 
    // dynamic padding = text width + small buffer
    setLeftPadding(textWidth + 40); 
  }
  }, [selectedItem]);
  return (
    <>
     <div className='w-full h-16 gap-8 flex items-center justify-between shadow-md fixed 
     top-0 left-0 right-0 z-50 px-6'>
            {/* logo */}
            <div className='flex-shrink-0 cursor-pointer'>
                <img className="w-18 h-18 rounded-full" src={logo} alt="Logo" />
            </div>
            {/* location */}
            <div className='text-sm font-base flex items-center gap-1'>
                <div>location</div>
                
                {/* Dropdown */}
                <select
                className="w-[9%] h-4 border bg-green-200 rounded-sm p-0 outline-none focus:ring-2 focus:ring-blue-200"
                 value={selectedCity}
                 onChange={(e) => setSelectedCity(e.target.value)}
                 name="" id="">
                    <option value="">--select--</option>
                    {cities.map((city,index)=>(
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
                  {/* Show selected city */}
              {selectedCity && (
               <div className="mt-1 text-gray-700 text-sm bg-yellow-100 p-1 rounded">
             <span className="font-sm">{selectedCity}</span>
        </div>
      )}
            </div>
           
            {/* search bar */}
            <div className='relative w-full max-w-md mx-auto flex items-center '>
               {/* all item menu */}
             <div
           
             className='absolute left-2 top-1/2 -translate-y-1/2 text-sm flex items-center font-sm  gap-1'>
              {selectedItem ? (
              <span   ref={leftBlockRef} className="text-sm text-blue-600 whitespace-nowrap">{selectedItem}</span>
                ) : (
               "All"
               )}
                
                {/* Dropdown */}
                <select
                className=" bg-transparent w-[9%] h-4 border bg-gray-200 rounded-sm outline-none focus:ring-2 focus:ring-blue-200"
                 value={selectedItem}
                 onChange={(e) => setSelectedItem(e.target.value)}
                 name="selectedItem" id="">
                    <option value="">-select-</option>
                    {allItems.map((item,index)=>(
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
               
            </div>
                <input 
                type="text"
                placeholder='Search for products'
             
                className='w-full pl-20 pr-10 py-2 rounded-xl bg-gray-100 text-gray-700 
                   focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                     style={{ paddingLeft: `${leftPadding}px` }}
                />
                {/* Search Icon */}
                <FiSearch className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500'
                size={20}/>
            </div>
            {/* language */}
               <div className='text-sm font-base flex items-center gap-1'>
                <div>language</div>
              {/* Dropdown */}
                <select
                className="w-[9%] h-4 border bg-orange-200 rounded-sm p-0 outline-none focus:ring-2 focus:ring-blue-200"
                 value={selectedLanguage}
                 onChange={(e) => setSelectedLanguage(e.target.value)}
                 name="" id="">
                    <option value="">--select--</option>
                    {languages.map((language,index)=>(
                        <option key={index} value={language}>{language}</option>
                    ))}
                </select>
                
              {/* Show selected city */}
              {selectedLanguage && (
               <div className="mt-1 text-gray-600 text-sm bg-violet-200 p-0 items-left rounded">
             <span className="font-sm">{selectedLanguage}</span>
            </div>
          )}
            </div>
          
            {/* menu bar */}
        <div className="flex flex-row justify-between items-center text-base px-4 gap-6">
          <FiUser className="w-5 h-6 hover:text-skyText duration-200 cursor-pointer" />
         
            {/* <FiStar className="hover:text-skyText duration-200 cursor-pointer" /> */}
           
           <div>Return & Order</div>
         
          <div className="relative block">
            <FiShoppingCart className=" w-7 h-7 hover:text-skyText duration-200 cursor-pointer" />
            <span
              className="inline-flex items-center justify-center bg-red-500 text-white absolute 
            -top-1 -right-2 text-[10px] rounded-full w-5 h-5"
            >
              0
            </span>
          </div>
        </div>
        </div>
    </>
       
       
  )
}

export default NavHeader