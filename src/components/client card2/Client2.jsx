import React, { use, useEffect, useState } from 'react'
import ClientCard2 from './ClientCard2'
// import { Laptop } from '../../products/laptop/Laptop'
// import { Mobile } from '../../products/mobile/Mobile'
// import { Vanity } from '../../products/vanity/Vanity'
// import { Electronic1 } from '../../products/electronic1/Electronic1'

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
         subTitle={"Discover the latest laptop models with cutting-edge technology"}
         items={products.filter(p=>p.category==="laptop")}
         viewPage={'/laptop'}
         />
         <ClientCard2
         title={"Mobile"}
         subTitle={"Explore the newest mobile phones with advanced features"}
         items={Mobile}
         viewPage={'/mobile'}
         />
         <ClientCard2
         title={"Vanity"}
         subTitle={"Discover our collection of stylish vanity products"}
         items={Vanity}
         viewPage={'/vanity'}
         />
         <ClientCard2
         title={"Electronic_daily"}
         subTitle={"Introducing new electronic daily essential arrival products"}
         items={Electronic1}
         viewPage={'/electronic'}
         />
          <ClientCard2
         title={"Grocery"}
         subTitle={"Introducing daily essential arrival products"}
         items={Electronic1}
         viewPage={'/grocery'}
         />
          <ClientCard2
         title={"Telecom"}
         subTitle={"Introducing daily essential  arrival product"}
         items={Electronic1}
         viewPage={'/telecom'}
         />
           <ClientCard2
         title={"Furniture"}
         subTitle={"New designed  daily essential  arrival product"}
         items={Electronic1}
         viewPage={'/furniture'}
         />
            <ClientCard2
         title={"Juwelry"}
         subTitle={"Introducing daily essential  arrival product"}
         items={Electronic1}
         viewPage={'/juwelry'}
         />
    </section>
  )
}

export default Client2