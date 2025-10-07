import React from 'react'
import { useCart } from '../../context/CartContext'

const CartPage = () => {
    const {cartItems,incQty,decQty,remove}=useCart()
   
     const total=cartItems.reduce((sum,item)=>sum + item.price * (item.quantity || 1),0);
     const totalPayment=total.toFixed(2);
      {console.log("cart-product",cartItems)}
  return (
    <div className='max-w-4xl mx-auto p-5'>
        <h1 className='text-2xl font-bold mb-5'>Your Shopping Cart</h1>
        <div className='space-y-5'>
            {cartItems.map((item,index)=>(

            <div
            key={index}
            className='flex items-center justify-between border p-4 rounded-lg shadow-sm'>
                <div className='flex items-center gap-4'>
                      <img 
                        src={item.images?.[0] || "loading..."}
                        alt="item.name" 
                        className='w-20 h-20 object-cover rounded-lg'
                        />
                    <div>
                        <h1 className='font semi-bold'>{item.name}</h1>
                        <p className='text-gray-500'>{item.price}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <button onClick={()=>decQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>incQty(item.id)}>+</button>
                    <button onClick={()=>remove(item.id)}>remove</button>
                </div>
            </div>
            ))}
        </div>
        {/* Total price */}
        <div className='flex flex-col items-center mt-8 p-5 shadow rounded-lg shadow-sm'>
            <h2 className='text-xl font-bold'>Total:$ {totalPayment}</h2>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-lg mt-4'>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CartPage