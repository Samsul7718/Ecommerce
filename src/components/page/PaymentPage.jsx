import React from 'react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    const {cartItems}=useCart();
    const [paymentMethod,setPaymentMethod]=React.useState("Card");

    const total=cartItems.reduce((acc,item)=>acc+item.price *(item.quantity || 1),0);
    // const totalPayment=total.toFixed(2);

  return (
    <div className='flex flex-col items-center gap-6 mt-10'>
        <h2 className='font-bold text-gray-700 text-xl'>Payment page</h2>
        <div>Total Amount : INR {total.toFixed(2)}</div>
        <div className='space-y-2'>
          {["Card","Net Banking","UPI","Wallet","Cash on Delivery"].map((method,index)=>(
             <label key={index} className='flex items-center gap-2'>
                <input
                name='paymentMethod'
                value={method}
                type="radio" 
                checked={paymentMethod===method}
                onClick={(e)=>setPaymentMethod(e.target.value)}
                />
                <span className='capitalize'>{method}</span>
             </label>
          ))}
        </div>
            {paymentMethod === "Card" && (
        <div className="mt-2 space-y-2">
          <input type="text" placeholder="Card Number" className="border p-2 w-full" />
          <input type="text" placeholder="Name on Card" className="border p-2 w-full" />
          <div className="flex gap-2">
            <input type="text" placeholder="MM/YY" className="border p-2 w-1/2" />
            <input type="text" placeholder="CVV" className="border p-2 w-1/2" />
          </div>
        </div>
      )}
      <div className='flex items-center gap-10'>
        <Link to="/">
        <button className='bg-yellow-400  p-3 rounded-lg shadow-md'>Shop More</button>
        </Link>
        <Link to="/">
        <button className='bg-green-500 p-3 rounded-lg shadow-md'>pay INR {total}</button>
        </Link>
        
      </div>
    </div>
  )
}

export default PaymentPage