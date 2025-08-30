import React from 'react'
import NavHeader from './navheader/NavHeader'
import NavFooter from './navFooter/NavFooter'



const Navbar = () => {
  return (
      <div className="w-full flex flex-col">
      <NavHeader />
      {/* push footer below fixed header */}
      <div className="mt-15">  
        <NavFooter />
      </div>
    </div>
  )
}

export default Navbar