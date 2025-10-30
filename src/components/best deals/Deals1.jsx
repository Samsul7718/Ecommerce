import React, {useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import {MenProducts} from '../../products/men fashion/MenFashion'
import { fson } from './Deals1_Img';

// import {images}from '../best deals/Deals1_Img'
// import { shirt,pant,T_shirt,formal, dumble, starx} from '../../assets'
// import { burkha,saree,kurti,long,cheast} from '../../assets'
import { ChevronLeft, ChevronRight } from 'lucide-react';

// const images=[
//   {src:shirt,link:"/fashion"},
//   {src:pant,link:"/fashion"},
//   {src:T_shirt,link:"/fashion"},
//   {src:formal,link:"/fashion"},
//   {src:burkha,link:"/fashion"},
//   {src:saree,link:"/fashion"},
//   {src:kurti,link:"/fashion"},
//   {src:long,link:"/fashion"},
//   {src:cheast,link:"/fitness"},
//   {src:dumble,link:"/fitness"},
//   {src:starx,link:"/fitness"},
// ]
const Deals1 = () => {
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
    {fson?.map((product, index) => (
           <Link
           key={index}
           to={`item/${product.id}`}
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