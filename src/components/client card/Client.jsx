import React from 'react'
import ClientCard from './ClientCard'

const Client = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6
      bg-sky-100'>
        
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>

    </section>
  )
}

export default Client