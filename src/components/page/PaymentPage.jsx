import React from 'react'
import { useCart } from '../../context/CartContext'

const PaymentPage = () => {
    const {cartItems}=useCart();

    const total=cartItems.reduce((acc,item)=>acc+item.price *(item.quantity || 1),0);
    // const totalPayment=total.toFixed(2);

  return (
    <div className='flex flex-col items-center'>
        <h2 className='font-bold text-gray-700 text-xl'>Payment page</h2>
        <div>Total Amount : INR {total.toFixed(2)}</div>
    </div>
  )
}

export default PaymentPage