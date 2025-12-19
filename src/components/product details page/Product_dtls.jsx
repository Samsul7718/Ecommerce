import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import {useLocation, useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { resolveSrc } from "../../config/api";
import { useCart } from "../../context/CartContext";


// const products = [...MenProducts, ...GirlProducts, ...GymProducts, ...KitchProducts, ...Toys,
//   ...Shoes,...Electronic,...Beauty,...Laptop,...Mobile,...Vanity,...Electronic1];

const Product_dtls = () => {
  const { selectedProduct:product } = useProduct();
    // console.log("hello product");
    
  // const { id } = useParams();
// const { state } = useLocation();
// const { products } = state || { products: [] };
console.log("products in dtls page:", product);
//  const productContext = selectedProduct;
  const {addToCart}=useCart()
  const navigate=useNavigate();
  //  const product = productContext.find((item) => item.id === id);
//   const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(resolveSrc(product?.images?.[0] || ""));
  // const [selectedColor, setSelectedColor] = useState("red"); 
  // const [selectedSize, setSelectedSize] = useState(product?.size?.[0] || '');
  

//     //  const total=cartItems.reduce((sum,item)=>sum + product.price * (product.quantity || 1),0);
//   const basePrice = product?.price;

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
//   const totalPrice=(basePrice * quantity).toFixed(2)

  const handleCartProduct=(product)=>{
      addToCart(product);
      // setQuantity(1);
      navigate("/cart");
  }
  if (!product) return <h2>Product not found{product.name}</h2>;

  // useEffect(()=>{
  //   if(products?.images?.length>0){
  //     setSelectedImg(resolveSrc(products.images[0]))
  //   }
  // },[products])


  return (
    <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
       {/* Left: Product Image */}
      <div className="flex flex-col justify-center">
       {console.log("products in dtls page from return :", product)}
        <div>
              <img
          src={selectedImg}
          alt="products"
          className="rounded-2xl shadow-lg object-cover w-full h-120 max-w-md"
          // style={{ backgroundColor: selectedColor }}
        />
          </div>
          <div className="flex gap-1 m-3 overflow-x-hidden">
           {products?.images?.map((img,index)=>(
              <div key={index}
             className={`min-w-[70px] shrink-0 p-1 m-2 cursor-pointer rounded-md shadow-md 
               ${selectedImg===resolveSrc(img) ? 'ring-2 ring-sky-500':'border-transparent'}`}
              // style={{ backgroundColor: color }}
             onClick={()=>setSelectedImg(resolveSrc(img))}
             >
                <img 
               src={resolveSrc(img)} 
               alt="" 
               className="w-full h-20 object-cover"
               />
             </div>
           ))}
          
          </div>
      
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
          <p className="text-gray-600 leading-relaxed">
          {product?.description}
         </p>

          {/* size */}
            {product?.size && product?.size.length>0 && (
           <div>
         <h3 className="font-medium text-gray-700 mb-2">Size:</h3>
         <div className="flex gap-3">
            {product?.size.map((s) => (
             <button
               key={s}
                // onClick={() => setSelectedSize(s)}
              //   className={`px-3 py-1 border rounded-lg ${
              //    selectedSize === s
              //      ? "border-sky-500 scale-110"
              //      : "border-gray-300"
              //  }`}
             >
                {s}
              </button>
           ))}
         </div>
       
         </div>
           )} 
         
          {/* Colors */}
        {products?.colors && products?.colors.length>0 &&(
          <div>
         <h3 className="font-medium text-gray-700 mb-2">Color:</h3>
         <div className="flex gap-3">
           {products?.colors.map((color) => (
             <button
               key={color}
              //  onClick={() => setSelectedColor(color)}
              //  className={`w-6 h-6 rounded-full border-2 ${
              //    selectedColor === color
              //      ? "border-sky-500 scale-110"
              //      : "border-gray-300"
              // }`}
              // style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      )}

          {/* Price */}
        {/* <div className="text-2xl font-semibold text-sky-600">${totalPrice}</div> */}

          {/* Quantity selector */}
        <div className="flex items-center space-x-4">
           <button
            //  onClick={handleDecrease}
            className="px-3 py-1 border rounded-lg hover:bg-gray-100"
           >
            -
           </button>
           {/* <span className="text-lg">{quantity}</span> */}
           <button
            // onClick={handleIncrease}
            className="px-3 py-1 border rounded-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
            {/* <Link to="/cart"> */}
           <button
          onClick={()=>handleCartProduct(product)}
          className="px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700">
            Add to Cart
          </button> 
            {/* </Link> */}
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
