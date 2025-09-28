import React from 'react'

const CartPage = () => {
  return (
    <div className='max-w-5xl mx-auto p-5'>
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
        <div>
            <h2>total</h2>
            <button>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CartPage