// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { MenProducts } from "../../products/men fashion/MenFashion";
// import { GirlProducts } from "../../products/women fashion/WomenFashion";
// import { GymProducts } from "../../products/gym/Gym";
// import { KitchProducts } from "../../products/kitchen/Kitchen";
// import { Toys } from "../../products/toy/Toy";
// import { Shoes } from "../../products/shoe/Shoe";
// import { Electronic } from "../../products/electronics/Electronic";
// import { Beauty } from "../../products/beauty/Beauty";
// import { Laptop } from "../../products/laptop/Laptop";
// import { Mobile } from "../../products/mobile/Mobile";
// import { Vanity } from "../../products/vanity/Vanity";
// import { Electronic1 } from "../../products/electronic1/Electronic1";
// import { useCart } from "../../context/CartContext";

// const products = [...MenProducts, ...GirlProducts, ...GymProducts, ...KitchProducts, ...Toys,
//   ...Shoes,...Electronic,...Beauty,...Laptop,...Mobile,...Vanity,...Electronic1];

// const Product_dtls = () => {
//   const { id } = useParams();
//   const {addToCart}=useCart()
//   const navigate=useNavigate();
//    const product = products.find((item) => item.id === id);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImg, setSelectedImg] = useState(product?.images?.[0] || '');
//   const [selectedColor, setSelectedColor] = useState("red"); 
//   const [selectedSize, setSelectedSize] = useState(product?.size?.[0] || '');
  

//     //  const total=cartItems.reduce((sum,item)=>sum + product.price * (product.quantity || 1),0);
//   const basePrice = product?.price;

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
//   const totalPrice=(basePrice * quantity).toFixed(2)

//   const handleCartProduct=(product)=>{
//       addToCart(product,quantity,selectedColor,selectedSize);
//       setQuantity(1);
//       navigate("/cart");
//   }

//   return (
//     <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
//       {/* Left: Product Image */}
//       <div className="flex flex-col justify-center">
//         <div>
//             <img
//           src={selectedImg}
//           alt="Product"
//           className="rounded-2xl shadow-lg object-cover w-full h-120 max-w-md"
//           style={{ backgroundColor: selectedColor }}
//         />
//         </div>
//         <div className="flex gap-1 m-3 overflow-x-hidden">
//           {product?.images?.map((img,index)=>(
//              <div key={index}
//             className={`min-w-[70px] shrink-0 p-1 m-2 cursor-pointer rounded-md shadow-md 
//               ${selectedImg===img ? 'ring-2 ring-sky-500':'border-transparent'}`}
//               // style={{ backgroundColor: color }}
//             onClick={()=>setSelectedImg(img)}
//             >
//               <img 
//               src={img} 
//               alt="" 
//               className="w-full h-20 object-cover"
//               />
//             </div>
//           ))}
          
//         </div>
      
//       </div>

//       {/* Right: Product Info */}
//       <div className="flex flex-col justify-center space-y-6">
//         <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
//         <p className="text-gray-600 leading-relaxed">
//         {product?.description}
//         </p>

//           {/* size */}
//           {product?.size && product?.size.length>0 && (
//           <div>
//         <h3 className="font-medium text-gray-700 mb-2">Size:</h3>
//         <div className="flex gap-3">
//           {product?.size.map((s) => (
//             <button
//               key={s}
//               onClick={() => setSelectedSize(s)}
//               className={`px-3 py-1 border rounded-lg ${
//                 selectedSize === s
//                   ? "border-sky-500 scale-110"
//                   : "border-gray-300"
//               }`}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
       
//           </div>
//           )}
         
//          {/* Colors */}
//       {product?.colors && product?.colors.length>0 &&(
//          <div>
//         <h3 className="font-medium text-gray-700 mb-2">Color:</h3>
//         <div className="flex gap-3">
//           {product?.colors.map((color) => (
//             <button
//               key={color}
//               onClick={() => setSelectedColor(color)}
//               className={`w-6 h-6 rounded-full border-2 ${
//                 selectedColor === color
//                   ? "border-sky-500 scale-110"
//                   : "border-gray-300"
//               }`}
//               style={{ backgroundColor: color }}
//             />
//           ))}
//         </div>
//       </div>
//       )}

//         {/* Price */}
//         <div className="text-2xl font-semibold text-sky-600">${totalPrice}</div>

//         {/* Quantity selector */}
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleDecrease}
//             className="px-3 py-1 border rounded-lg hover:bg-gray-100"
//           >
//             -
//           </button>
//           <span className="text-lg">{quantity}</span>
//           <button
//             onClick={handleIncrease}
//             className="px-3 py-1 border rounded-lg hover:bg-gray-100"
//           >
//             +
//           </button>
//         </div>

//         {/* Buttons */}
//         <div className="flex space-x-4">
//           {/* <Link to="/cart"> */}
//           <button
//           onClick={()=>handleCartProduct(product)}
//           className="px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700">
//             Add to Cart
//           </button>
//           {/* </Link> */}
//           <button className="px-6 py-3 border border-sky-600 text-sky-600 rounded-xl hover:bg-sky-50">
//             Buy Now
//           </button>
//         </div>

//         {/* Extra Info */}
//         <div className="pt-4 border-t">
//           <p className="text-sm text-gray-500">
//             ✅ Free Shipping • 🔄 7 Days Easy Return
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product_dtls;
