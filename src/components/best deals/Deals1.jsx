import React from 'react'
import Deals_Card from './Deals_Card'
import { shirt,pant,T_shirt,formal } from '../../assets'

const Deals1 = () => {
  return (
    <section id ='102' className='w-full my-16 px-4'>
        <Deals_Card
         title={"Mens Fashion"}
               subTitle={"Discover the latest trends in"}
               items={[
                 {id:1, title:"Shirts", src: shirt},
                 {id:2, title:"Pants", src: pant},
                 {id:3, title:"T-shirt", src: T_shirt},
                 {id:4, title:"Formals", src: formal},
               ]}
        />
        <Deals_Card
         title={"Mens Fashion"}
               subTitle={"Discover the latest trends in"}
               items={[
                 {id:1, title:"Shirts", src: shirt},
                 {id:2, title:"Pants", src: pant},
                 {id:3, title:"T-shirt", src: T_shirt},
                 {id:4, title:"Formals", src: formal},
               ]}
        />
        <Deals_Card
         title={"Mens Fashion"}
               subTitle={"Discover the latest trends in"}
               items={[
                 {id:1, title:"Shirts", src: shirt},
                 {id:2, title:"Pants", src: pant},
                 {id:3, title:"T-shirt", src: T_shirt},
                 {id:4, title:"Formals", src: formal},
               ]}
        />
        <Deals_Card
         title={"Mens Fashion"}
               subTitle={"Discover the latest trends in"}
               items={[
                 {id:1, title:"Shirts", src: shirt},
                 {id:2, title:"Pants", src: pant},
                 {id:3, title:"T-shirt", src: T_shirt},
                 {id:4, title:"Formals", src: formal},
               ]}
        />
        <Deals_Card
         title={"Mens Fashion"}
               subTitle={"Discover the latest trends in"}
               items={[
                 {id:1, title:"Shirts", src: shirt},
                 {id:2, title:"Pants", src: pant},
                 {id:3, title:"T-shirt", src: T_shirt},
                 {id:4, title:"Formals", src: formal},
               ]}
        />

    </section>
  )
}

export default Deals1