import React from 'react'
import ClientCard from './ClientCard'
import { hero3 } from '../../assets'
import { shirt,pant,T_shirt,formal } from '../../assets'

const Client = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 py-2
      bg-sky-100'>
        
       <ClientCard
       title={"Mens Fashion"}
       subTitle={"Discover the latest trends in"}
       items={[
         {id:1, title:"Shirts", src: shirt},
         {id:2, title:"Pants", src: pant},
         {id:3, title:"T-shirt", src: T_shirt},
         {id:4, title:"Formals", src: formal},
       ]}
       />
        <ClientCard
       title={"Womens Fashion"}
       subTitle={"Discover the latest trends in"}
       items={[
         {id:1, title:"Shirts", src: hero3},
         {id:2, title:"Pants", src: hero3},
         {id:3, title:"T-shirt", src: hero3},
         {id:4, title:"Formals", src: hero3},
       ]}
       />
        <ClientCard
       title={"Gym"}
       subTitle={"Get into your fitness world"}
       items={[
         {id:1, title:"Shirts", src: hero3},
         {id:2, title:"Pants", src: hero3},
         {id:3, title:"T-shirt", src: hero3},
         {id:4, title:"Formals", src: hero3},
       ]}
       />
        <ClientCard
       title={"Toy's"}
       subTitle={"Get relaxed with toy's"}
       items={[
         {id:1, title:"Shirts", src: hero3},
         {id:2, title:"Pants", src: hero3},
         {id:3, title:"T-shirt", src: hero3},
         {id:4, title:"Formals", src: hero3},
       ]}
       />
        <ClientCard
       title={"Kitchen Appliances"}
       subTitle={"Introduce the best kitchen appliances"}
       items={[
         {id:1, title:"Shirts", src: hero3},
         {id:2, title:"Pants", src: hero3},
         {id:3, title:"T-shirt", src: hero3},
         {id:4, title:"Formals", src: hero3},
       ]}
       />
        <ClientCard
       title={"Shoes"}
       subTitle={"Step style with latest shoe collection"}
       items={[
         {id:1, title:"Shirts", src: hero3},
         {id:2, title:"Pants", src: hero3},
         {id:3, title:"T-shirt", src: hero3},
         {id:4, title:"Formals", src: hero3},
       ]}
       />
        <ClientCard
       title={"Best of Electronics"}
       subTitle={"Explore top-rated electronics"}
       items={[
         {id:1, title:"Shirts", src: hero3},
         {id:2, title:"Pants", src: hero3},
         {id:3, title:"T-shirt", src: hero3},
         {id:4, title:"Formals", src: hero3},
       ]}
       />
        <ClientCard
       title={"Best seller in Beauty"}
       subTitle={"Discover the latest trends in"}
       items={[
         {id:1, title:"Shirts", src: hero3},
         {id:2, title:"Pants", src: hero3},
         {id:3, title:"T-shirt", src: hero3},
         {id:4, title:"Formals", src: hero3},
       ]}
       />
       {/* <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/> */}

    </section>
  )
}

export default Client