import React from 'react'
import { useCart } from '../../context/CartContext'

const CartPage = () => {
    const {addToCart}=useCart()
  return (
    <div className='max-w-4xl mx-auto p-5'>
        <h1 className='text-2xl font-bold mb-5'>Your Shopping Cart</h1>
        <div className='space-y-5'>
            <div
            key=""
            className='flex items-center justify-between border p-4 rounded-lg shadow-sm'>
                <div className='flex items-center gap-4'>
                      <img 
                        src="" 
                        alt="" 
                        className='w-20 h-20 object-cover rounded-lg'
                        />
                    <div>
                        <h1 className='font semi-bold'>name</h1>
                        <p className='text-gray-500'>price</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <button>-</button>
                    <span>qty</span>
                    <button>+</button>
                    <button>remove</button>
                </div>
            </div>
        </div>
        {/* Total price */}
        <div className='mt-8 p-5 shadow rounded-lg shadow-sm'>
            <h2 className='text-xl font-bold'>total</h2>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-lg mt-4'>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CartPage