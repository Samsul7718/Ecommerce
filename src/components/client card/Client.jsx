import React from 'react'
import ClientCard from './ClientCard'
import { MenProducts } from '../../products/men fashion/MenFashion'
import { GirlProducts } from '../../products/women fashion/WomenFashion'
import { KitchProducts } from '../../products/kitchen/Kitchen'
import { GymProducts } from '../../products/gym/Gym'
import { Toys } from '../../products/toy/Toy'
import { Shoes } from '../../products/shoe/Shoe'
import { Electronic } from '../../products/electronics/Electronic'
import { Beauty } from '../../products/beauty/Beauty'
const Client = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 p-4
      bg-sky-100'>
        
       <ClientCard
       title={"Mens Fashion"}
       subTitle={"Discover the latest trends in"}
       items={MenProducts}
       seeMorePage={"/menfashion"}
      
       />
        <ClientCard
       title={"Womens Fashion"}
       subTitle={"Discover the latest trends in"}
       items={GirlProducts}
        seeMorePage={"/womenfashion"}
       />
        <ClientCard
       title={"Gym"}
       subTitle={"Get into your fitness world"}
       items={GymProducts}
        seeMorePage={"/gymfashion"}
       />
        <ClientCard
       title={"Toy's"}
       subTitle={"Get relaxed with toy's"}
       items={Toys}
       seeMorePage={"/KidsToy"}
       />
        <ClientCard
       title={"Kitchen Appliances"}
       subTitle={"Introduce the best kitchen appliances"}
       items={KitchProducts}
       seeMorePage={"/kittools"}
       />
        <ClientCard
       title={"Shoes"}
       subTitle={"Step style with latest shoe collection"}
       items={Shoes}
       seeMorePage={"/Shoes"}
       />
        <ClientCard
       title={"Best of Electronics"}
       subTitle={"Explore top-rated electronics"}
       items={Electronic}
       seeMorePage={"/electronic"}
       />
        <ClientCard
       title={"Best seller in Beauty"}
       subTitle={"Discover the latest trends in"}
       items={Beauty}
       seeMorePage={"/Beauty"}
       />

    </section>
  )
}

export default Client