import React from 'react'

const CartPage = () => {
  return (
    <div className=''>
        <h1>Your Shopping Cart</h1>
        <div className=''>
            <div
            key=""
            className=''>
                <div>
                      <img 
                        src="" 
                        alt="" 
                        className=''
                        />
                    <div>
                      
                        <h1 className=''>name</h1>
                        <p className=''>price</p>
                    </div>
                </div>
                <div>
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