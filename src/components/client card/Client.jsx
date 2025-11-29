import React from 'react'
import ClientCard from './ClientCard'
// import { MenProducts } from '../../products/men fashion/MenFashion'
// import { GirlProducts } from '../../products/women fashion/WomenFashion'
// import { KitchProducts } from '../../products/kitchen/Kitchen'
// import { GymProducts } from '../../products/gym/Gym'
// import { Toys } from '../../products/toy/Toy'
// import { Shoes } from '../../products/shoe/Shoe'
// import { Electronic } from '../../products/electronics/Electronic'
// import { Beauty } from '../../products/beauty/Beauty'
import { useState } from 'react'
import { useEffect } from 'react'
const Client = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/api/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err));
  },[])
  console.log("product from backend",products);
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 p-4
      bg-sky-100'>
        
       <ClientCard
       title={"Mens Fashion"}
       subTitle={"Discover the latest trends in"}
       items={products.filter(p => Number(p.id) >= 1 && Number(p.id) <= 50)}
       seeMorePage={"/menfashion"}
      
       />
        <ClientCard
       title={"Womens Fashion"}
       subTitle={"Discover the latest trends in"}
        items={products.filter(p => Number(p.id) >= 51 && Number(p.id) <= 100)}
        seeMorePage={"/womenfashion"}
       />
        {/* <ClientCard
       title={"Gym"}
       subTitle={"Get into your fitness world"}
       items={products}
        seeMorePage={"/gymfashion"}
       /> */}
        {/* <ClientCard
       title={"Toy's"}
       subTitle={"Get relaxed with toy's"}
       items={products}
       seeMorePage={"/KidsToy"}
       /> */}
        {/* <ClientCard
       title={"Kitchen Appliances"}
       subTitle={"Introduce the best kitchen appliances"}
       items={products}
       seeMorePage={"/kittools"}
       /> */}
        {/* <ClientCard
       title={"Shoes"}
       subTitle={"Step style with latest shoe collection"}
       items={products}
       seeMorePage={"/Shoes"}
       /> */}
        {/* <ClientCard
       title={"Best of Electronics"}
       subTitle={"Explore top-rated electronics"}
       items={products}
       seeMorePage={"/electronic"}
       /> */}
        {/* <ClientCard
       title={"Best seller in Beauty"}
       subTitle={"Discover the latest trends in"}
       items={products}
       seeMorePage={"/Beauty"}
       /> */}

    </section>
  )
}

export default Client