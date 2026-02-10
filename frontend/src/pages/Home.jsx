import React, { useContext, useEffect } from 'react'
import Crop from '../components/Crop'
import { ShopContext } from '../context/ShopContext'
import Navbar from '../components/Navbar';

const Home = () => {
  const {crops}=useContext(ShopContext);

  useEffect(()=>{
  
  })

  return (
    <div className=''>
      <Navbar />
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-6 max-[400px]:mx-7 mx-20 mt-3 mb-10'>
      {
        crops.map((item,index)=>(
          <Crop key={index} id={item._id} name={item.name} price={item.price} location={item.location} status={item.status} image={item.image} />
        ))
      }
    </div>
    </div>
  )
}

export default Home