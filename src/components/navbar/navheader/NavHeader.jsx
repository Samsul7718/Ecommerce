import React from 'react'
import { logo } from '../../../assets'
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiStar, FiUser } from "react-icons/fi";

const NavHeader = () => {
  return (
        <div className='w-full h-16 flex items-center justify-between shadow-md'>
            {/* logo */}
            <div className='flex-shrink-0 cursor-pointer'>
                <img className="w-18 h-18 rounded-full" src={logo} alt="Logo" />
            </div>
            {/* location */}
            <div>location</div>
            {/* search bar */}
            <div className=''>
                <input 
                type="text"
                placeholder='Search for products'
                className=''
                />
            </div>
            {/* menu bar */}
        <div className="flex item-center gap-x-6 text-2xl ">
          <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
          <div className="relative block">
            <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span
              className="inline-flex items-center justify-center bg-redText text-whiteText absolute
             -top-1 -right-2 text-[9px] rounded-full w-4 h-4"
            >
              0
            </span>
          </div>
          <div className="relative block">
            <FiShoppingCart className="hover:text-skyText duration-200 cursor-pointer" />
            <span
              className="inline-flex items-center justify-center bg-redText text-whiteText absolute 
            -top-1 -right-2 text-[9px] rounded-full w-4 h-4"
            >
              0
            </span>
          </div>
        </div>
        </div>
       
  )
}

export default NavHeader