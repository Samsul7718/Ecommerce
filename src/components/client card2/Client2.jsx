import React from 'react'
import ClientCard2 from './ClientCard2'
import { Laptop } from '../../products/laptop/Laptop'
import { Mobile } from '../../products/mobile/Mobile'

const Client2 = () => {
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
         <ClientCard2
         title={"Laptop"}
         subTitle={"Introducing new arrival series"}
         items={Laptop}
         viewPage={'/Laptop'}
         />
         <ClientCard2
         title={"Laptop"}
         subTitle={"Introducing new arrival series"}
         items={Laptop}
         viewPage={'/Laptop'}
         />
    </section>
  )
}

export default Client2