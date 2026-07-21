import React, { use, useEffect, useState } from 'react'
import ClientCard2 from "./ClientCard2"
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Laptop } from '../../products/laptop/Laptop'
// import { Mobile } from '../../products/mobile/Mobile'
// import { Vanity } from '../../products/vanity/Vanity'
// import { Electronic } from '../../products/electronics/Electronic'

const Client2 = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err));
  },[])
  console.log("product from backend",products);
  return (
    
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-sky-100 pt-6 p-4'>
         <ClientCard2
         title={"Laptop"}
         subTitle={"Discover the latest laptop with powerful performance"}
         items={products.filter(p=>Number(p.id)>=401 && Number(p.id)<=450)}
         seeMorePage={'/laptop'}
         /> 
         <ClientCard2
         title={"Mobile"}
         subTitle={"Explore the newest mobile phones with cutting-edge features design"}
         items={products.filter(p=>Number(p.id)>=451 && Number(p.id)<=500)}
         viewPage={'/mobile'}
         />
         {/* <ClientCard2
         title={"Vanity"}
         subTitle={"Discover our collection of stylish vanity product to enhance yours beauty routines and self-care rituals"}
         items={products.filter(p=>p.category==="vanity")}
         viewPage={'/vanity'}
         /> */}
         {/* <ClientCard2
         title={"Electronic_daily"}
         subTitle={"Introducing newly arrived electronic products for your daily essential needs and lifestyle"}
         items={products.filter(p=>p.category==="Electronic")}
         viewPage={'/Electronic'}
         /> */}
          {/* <ClientCard2
         title={"Grocery"}
         subTitle={"Discover fresh and high-quality grocery products for yours daily needs"}
         items={Electronic}
         viewPage={'/grocery'}
         />  */}
           {/* <ClientCard2
         title={"Telecom"}
         subTitle={"Explore the latest telecom products and accessories for seamless connectivity and communication"}
         items={Electronic1}
         viewPage={'/telecom'}
         /> */}
           {/* <ClientCard2
         title={"Furniture"}
         subTitle={"New designed  daily essential furniture products for yours home and offices"}
         items={Electronic1}
         viewPage={'/furniture'}
         /> */}
         {/* <ClientCard2
         title={"Jewellery"}
         subTitle={"Introducing daily essential  arrived jewellery products for yours fashion and styles"}
         items={Electronic1}
         viewPage={'/jewellery'}
         /> */}
    </section>
  )
}

export default Client2