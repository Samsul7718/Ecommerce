import React from 'react'
import ClientCard from './ClientCard'
import { products } from '../../products/fashion/Product'
import { burkha,long,kurti,saree} from '../../assets'
import {cheast,dumble,starx,trademill } from '../../assets'
// import { shirt,pant,T_shirt,formal } from '../../assets'
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
       items={products}
      
       />
        <ClientCard
       title={"Womens Fashion"}
       subTitle={"Discover the latest trends in"}
       items={[
         {id:5, title:"Long", src: long},
         {id:6, title:"Kurti", src: kurti},
         {id:7, title:"Saree", src: saree},
         {id:8, title:"Burkha", src: burkha},
       ]}
       />
        <ClientCard
       title={"Gym"}
       subTitle={"Get into your fitness world"}
       items={[
         {id:9, title:"Cheast", src: cheast},
         {id:10, title:"Dumble", src: dumble},
         {id:11, title:"Starx", src: starx},
         {id:12, title:"Trademill", src: trademill},
       ]}
       />
        <ClientCard
       title={"Toy's"}
       subTitle={"Get relaxed with toy's"}
       items={[
         {id:13, title:"Thar", src: car},
         {id:14, title:"Bike", src: bike},
         {id:15, title:"JCB", src: jcb},
         {id:16, title:"Train", src: train},
       ]}
       />
        <ClientCard
       title={"Kitchen Appliances"}
       subTitle={"Introduce the best kitchen appliances"}
       items={[
         {id:17, title:"Coffiee Maker", src: coffiee},
         {id:18, title:"Juicer Instant", src: juicer},
         {id:19, title:"Toaster", src: toaster},
         {id:20, title:"Rice Maker_45", src: rice},
       ]}
       />
        <ClientCard
       title={"Shoes"}
       subTitle={"Step style with latest shoe collection"}
       items={[
         {id:21, title:"Nike shoes ", src: nike},
         {id:22, title:"Adidas dream", src: adidas},
         {id:23, title:"Reebok walk", src: reebok},
         {id:24, title:"Puma hunter", src: puma},
       ]}
       />
        <ClientCard
       title={"Best of Electronics"}
       subTitle={"Explore top-rated electronics"}
       items={[
         {id:25, title:"Laptop", src: lapi},
         {id:26, title:"Speaker", src: speaker},
         {id:27, title:"Watch", src: watch},
         {id:28, title:"2.0 pendrive", src: pend},
       ]}
       />
        <ClientCard
       title={"Best seller in Beauty"}
       subTitle={"Discover the latest trends in"}
       items={[
         {id:29, title:"Face powder", src: facepwd},
         {id:30, title:"Lakmi day creme", src: day_creme},
         {id:31, title:"Lipstick", src: lipstick},
         {id:32, title:"Face wash", src: facewash},
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