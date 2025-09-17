import React from 'react'
import ClientCard from './ClientCard'
import { hero3,burkha, long,kurti,saree} from '../../assets'
import {cheast,dumble,starx,trademill } from '../../assets'
import { shirt,pant,T_shirt,formal } from '../../assets'
import { car,bike,jcb,train } from '../../assets'
import { rice,juicer,toaster,coffiee } from '../../assets'
import { nike,adidas,puma,reebok } from '../../assets'
import { lapi,speaker,watch,pend } from '../../assets'
import { facepwd,day_creme,lipstick,facewash } from '../../assets'
const Client = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 p-4
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
         {id:1, title:"Long", src: long},
         {id:2, title:"Kurti", src: kurti},
         {id:3, title:"Saree", src: saree},
         {id:4, title:"Burkha", src: burkha},
       ]}
       />
        <ClientCard
       title={"Gym"}
       subTitle={"Get into your fitness world"}
       items={[
         {id:1, title:"Cheast", src: cheast},
         {id:2, title:"Dumble", src: dumble},
         {id:3, title:"Starx", src: starx},
         {id:4, title:"Trademill", src: trademill},
       ]}
       />
        <ClientCard
       title={"Toy's"}
       subTitle={"Get relaxed with toy's"}
       items={[
         {id:1, title:"Thar", src: car},
         {id:2, title:"Bike", src: bike},
         {id:3, title:"JCB", src: jcb},
         {id:4, title:"Train", src: train},
       ]}
       />
        <ClientCard
       title={"Kitchen Appliances"}
       subTitle={"Introduce the best kitchen appliances"}
       items={[
         {id:1, title:"Coffiee Maker", src: coffiee},
         {id:2, title:"Juicer Instant", src: juicer},
         {id:3, title:"Toaster", src: toaster},
         {id:4, title:"Rice Maker_45", src: rice},
       ]}
       />
        <ClientCard
       title={"Shoes"}
       subTitle={"Step style with latest shoe collection"}
       items={[
         {id:1, title:"Nike shoes ", src: nike},
         {id:2, title:"Adidas dream", src: adidas},
         {id:3, title:"Reebok walk", src: reebok},
         {id:4, title:"Puma hunter", src: puma},
       ]}
       />
        <ClientCard
       title={"Best of Electronics"}
       subTitle={"Explore top-rated electronics"}
       items={[
         {id:1, title:"Laptop", src: lapi},
         {id:2, title:"Speaker", src: speaker},
         {id:3, title:"Watch", src: watch},
         {id:4, title:"2.0 pendrive", src: pend},
       ]}
       />
        <ClientCard
       title={"Best seller in Beauty"}
       subTitle={"Discover the latest trends in"}
       items={[
         {id:1, title:"Face powder", src: facepwd},
         {id:2, title:"Lakmi day creme", src: day_creme},
         {id:3, title:"Lipstick", src: lipstick},
         {id:4, title:"Face wash", src: facewash},
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