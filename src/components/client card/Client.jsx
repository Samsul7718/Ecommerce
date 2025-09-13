import React from 'react'
import ClientCard from './ClientCard'
import { hero3 } from '../../assets'

const Client = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6
      bg-sky-100'>
        
       <ClientCard
       title={"Mens Fashion"}
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