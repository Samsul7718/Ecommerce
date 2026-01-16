import React, { use, useEffect } from 'react'
// import ClientCard2 from './ClientCard2'
// import { Laptop } from '../../products/laptop/Laptop'
// import { Mobile } from '../../products/mobile/Mobile'
// import { Vanity } from '../../products/vanity/Vanity'
// import { Electronic1 } from '../../products/electronic1/Electronic1'

const Client2 = () => {
  const [prosucts,setProducts]=useState([]);

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
         subTitle={"Introducing new arrival series"}
         items={Laptop}
         viewPage={'/laptop'}
         />
         <ClientCard2
         title={"Mobile"}
         subTitle={"Introducing new arrival series"}
         items={Mobile}
         viewPage={'/mobile'}
         />
         {/* <ClientCard2
         title={"Vanity"}
         subTitle={"Best collection for your all festivals"}
         items={Vanity}
         viewPage={'/vanity'}
         /> */}
         {/* <ClientCard2
         title={"Electronic_daily"}
         subTitle={"Introducing new arrival series"}
         items={Electronic1}
         viewPage={'/electronic'}
         /> */}
    </section>
  )
}

export default Client2