import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link, useParams } from 'react-router';
import Navbar from '../components/Navbar'
const CropDetails = () => {

  const { crops,setCrops,unit,currency } = useContext(ShopContext);
  const { cropID } = useParams();
  const crop=crops.find(item => item._id == cropID);
  const DeleteHandler=()=>{
    setCrops(crops.filter((crop)=> crop._id!==cropID ))
  }
  return (
    <div className='mb-10'>
      <Navbar/>
      <div className=' flex justify-center mt-5'>
        <img className='w-5/6 h-70 sm:w-2/4 sm:h-100 border-3 rounded-t-lg' src={crop.image instanceof File ? URL.createObjectURL(crop.image) : crop.image} alt="" />
      </div>
      <div className=' w-3/4 sm:w-2/4 h-fit mx-auto bg-gray-100 pb-5 rounded-b-lg '>
        <div className='flex flex-col gap-2 sm:flex-row justify-between sm:px-4 pt-5 mb-2 '>
          <p >Crop: {crop.name} </p>
          <p>Type: {crop.type}</p>
        </div>
        <div className='flex flex-col gap-2 sm:flex-row justify-between sm:px-4 mb-2 '>
          <p>Farmer: {crop.farmer} </p>
          <p>Location: {crop.location}</p>
        </div>
        <div className='flex flex-col gap-2 sm:flex-row justify-between sm:px-4 mb-10'>
          <p>1{unit} Price: {currency} {crop.price} </p>
          <p>Quantity: {crop.quantity}{unit}</p>
          <p>Status: {crop.status}</p>
        </div>
        <div className='flex flex-col gap-2 sm:flex-row justify-between sm:px-4'>
          <Link to={`/edit-crop/${crop._id}`}><button className='w-30 p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 cursor-pointer' >Edit</button></Link>
          <Link to={'/'}><button onClick={DeleteHandler} className='w-30 p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 cursor-pointer'>Delete</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CropDetails