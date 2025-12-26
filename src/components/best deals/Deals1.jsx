import React, {useEffect, useRef, useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useProduct } from '../../context/ProductContext';

const Deals1 = () => {
  const [products,setProducts]=useState([]);
  const {setSelectedProduct}=useProduct();
  
  useEffect(()=>{
      fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res=>res.json())
      .then((data)=>setProducts(data))
      .catch(err=>console.log(err));
  },[])
  const containerRef = useRef(null);
  const navigate=useNavigate();
    // const product = products.find((item) => item.id === id);

  const scrollLeft=()=>{
    if(containerRef.current){
      const containerWidth = containerRef.current.offsetWidth; // width + gap
      containerRef.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
    }
  }
   const scrollRight=()=>{
    if(containerRef.current){
     const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left:containerWidth, behavior: "smooth" });
    }
  }
  return (
    <section id ='102' className='relative w-full px-4 bg-sky-100'>
       
       <div className=" relative p-4 text-start">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Best deal for this week | Up to 35% off on fashion</h2>
    
        </div>


         <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth p-4"
          style={{ scrollSnapAlign: "start" }}
          >
    {products?.map((product, index) => (
           <Link
           key={index}
           to={`item/${product.id}`}
            onClick={()=>setSelectedProduct(product)}
           >
      <div
        key={index}
        onClick={()=>navigate()}
        className="min-w-[200px] flex-shrink-0 rounded-lg overflow-hidden shadow-md"
      >
        <img
          src={product?.images?.[0] || "loading..."}
          alt="fashionImg loading..."
          className="w-full h-40 object-cover"
        />
      </div>
     </Link>
    ))}
  </div>
     
      <button 
      onClick={scrollLeft}
      className="absolute left-4 top-3/5 -translate-y-2 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-20">
        <ChevronLeft className="text-black" size={24} />
      </button>

      <button
      onClick={scrollRight} 
      className="absolute right-4 top-3/5 -translate-y-2 bg-white/60 hover:bg-white p-3 rounded-full shadow-md z-20">
        <ChevronRight className="text-black" size={24} />
      </button>

    </section>
  )
}

export default Deals1