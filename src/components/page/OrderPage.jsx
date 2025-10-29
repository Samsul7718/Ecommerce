import React from 'react'

const OrderPage = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
        <h2 className='font-bold text-gray-700 text-xl'>Order Created</h2>
          <div>
                <p className='text-center mt-10'>Thank you for your purchase. Your order has been placed and is being processed.</p>
                <div className='flex justify-center mt-5'>
                  
                    <button className='bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition'>
                        Order Sucessful!
                    </button>
            </div>
        </div>
    </div>
  )
}

export default OrderPage