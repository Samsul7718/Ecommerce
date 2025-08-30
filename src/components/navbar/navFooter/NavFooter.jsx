import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { navbarData } from '../../../data/navbarData'

const navFooter = () => {
    const location=useLocation();
  return (
    <div>
        {navbarData.map((data,index)=>(
            <Link 
            key={index} 
            to={data.link}
            className=''>
            {data.name}
            </Link>
        ))}
    </div>
  )
}

export default navFooter