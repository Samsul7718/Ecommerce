import React from 'react'
import { logo } from '../../assets'

const Footer = () => {
  return (
   <footer className="w-full bg-gray-800 text-gray-300 py-6 px-8 text-sm">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Basic Info */}
    <div className=''>
        <div className='w-15 h-15 cursor-pointer bg-white rounded-full mb-4'>
            <img className="w-15 h-15 rounded-full" src={logo} alt="Logo" />
         </div>
      <p className="text-gray-400">Your shopmate shop for all essentials.</p>
      <p className="mt-3 text-gray-500">© {new Date().getFullYear()} ShopMate</p>
    </div>

    {/* Quick Links */}
    <div> 
      <h3 className="text-white font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/shop" className="hover:text-white">Shop</a></li>
        <li><a href="/contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div> 

    {/* Policies */}
    <div> 
      <h3 className="text-white font-semibold mb-2">Legal</h3>
      <ul className="space-y-1">
        {/* <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li> */}
        {/* <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li> */}
        {/* <li><a href="/refund" className="hover:text-white">Refund Policy</a></li> */}
      </ul>
    </div> 
  </div>
</footer>

  )
}

export default Footer