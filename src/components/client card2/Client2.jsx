import React, { use, useEffect, useState } from 'react'
import ClientCard2 from './ClientCard2'
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
  })
  return (
    
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-sky-100 pt-6 p-4'>
         <ClientCard2
         title={"Laptop"}
         subTitle={"Discover the latest laptop with powerful performance and sleek design for work"}
         items={products.filter(p=>p.category==="laptop")}
         viewPage={'/laptop'}
         />
         <ClientCard2
         title={"Mobile"}
         subTitle={"Explore the newest mobile phones with cutting-edge feature design connectivity"}
         items={products.filter(p=>p.category==="mobile")}
         viewPage={'/mobile'}
         />
         <ClientCard2
         title={"Vanity"}
         subTitle={"Discover our collection of stylish vanity products to enhance your beauty routine"}
         items={products.filter(p=>p.category==="vanity")}
         viewPage={'/vanity'}
         />
         <ClientCard2
         title={"Electronic_daily"}
         subTitle={"Introducing newly arrived electronic products for your daily essential need"}
         items={products.filter(p=>p.category==="electronic")}
         viewPage={'/electronic'}
         />
          <ClientCard2
         title={"Grocery"}
         subTitle={"Discover fresh and high-quality grocery products for your daily need and culinary"}
         items={Electronic}
         viewPage={'/grocery'}
         />
          <ClientCard2
         title={"Telecom"}
         subTitle={"Explore the latest telecom products and accessories for seamless connectivity"}
         items={Electronic1}
         viewPage={'/telecom'}
         />
           <ClientCard2
         title={"Furniture"}
         subTitle={"New designed  daily essential furniture products for your home and office"}
         items={Electronic1}
         viewPage={'/furniture'}
         />
            <ClientCard2
         title={"Juwelry"}
         subTitle={"Introducing daily essential  arrived juwelry products for yours"}
         items={Electronic1}
         viewPage={'/juwelry'}
         />
    </section>
  )
}

export default Client2