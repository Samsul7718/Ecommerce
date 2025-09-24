import React, { useState } from "react";
import { formal,pant,shirt,T_shirt,long } from "../../assets";

const images = [formal,pant,shirt,T_shirt,long];

const Product_dtls = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(formal);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Left: Product Image */}
      <div className="flex flex-col justify-center">
        <div>
            <img
          src={selectedImg}
          alt="Product"
          className="rounded-2xl shadow-lg object-cover w-full h-120 max-w-md"
        />
        </div>
        <div className="flex gap-2 mt-2 overflow-x-hidden">
          {images.map((img,index)=>(
             <div key={index}
            className={`min-w-[80px] shrink-0 p-2 overflow-hidden shadow-md 
              ${selectedImg===img ? 'ring-2 ring-sky-500':'border-transparent'}`}
            onClick={()=>setSelectedImg(img)}
            >
              <img 
              src={img} 
              alt="" 
              className="w-full h-20 object-cover rounded-md"
              />
            </div>
          ))}
          
        </div>
      
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Stylish Sneakers</h1>
        <p className="text-gray-600 leading-relaxed">
          These sneakers are designed for comfort and style. Perfect for casual wear or sports activities. Made with breathable fabric and durable sole.
        </p>

        {/* Price */}
        <div className="text-2xl font-semibold text-sky-600">$79.99</div>

        {/* Quantity selector */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleDecrease}
            className="px-3 py-1 border rounded-lg hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="px-3 py-1 border rounded-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700">
            Add to Cart
          </button>
          <button className="px-6 py-3 border border-sky-600 text-sky-600 rounded-xl hover:bg-sky-50">
            Buy Now
          </button>
        </div>

        {/* Extra Info */}
        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500">
            ✅ Free Shipping • 🔄 7 Days Easy Return
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product_dtls;
