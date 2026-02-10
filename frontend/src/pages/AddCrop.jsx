import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import {assets} from '../assets/assets.js'
import {ShopContext} from '../context/ShopContext'
import { Link } from 'react-router';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';


const AddCrop = () => {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [farmer, setFarmer] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState('Available');
  const [image, setImage] = useState(assets.upload_area);

  const {unit,backendUrl,navigate}=useContext(ShopContext);

  const submitHandler=async(event)=>{
    event.preventDefault();
    console.log("onSubmit submitHandler calling");
    try {
          const formData=new FormData();
          formData.append("name",name);
          formData.append("type",type);
          formData.append("farmer",farmer);
          formData.append("location",location);
          formData.append("price",price);
          formData.append("quantity",quantity);
          formData.append("status",status);
          formData.append("image",image);

          const response=await axios.post(backendUrl+'/api/crop/add-crop',formData)
          if(response.data.success){
            console.log("crops added");
            navigate('/');
          }

    } catch (error) {
      console.log(error.message);
    }
  }
useEffect(()=>{
})
  return (
    <>
      <Navbar/>
      <form onSubmit={submitHandler} >
      <div className="w-4/5 sm:w-2/5 m-auto max-sm:text-sm flex flex-col justify-center items-center gap-2 mt-5 mb-15 border rounded-lg bg-gray-100">
        <div>
          <label htmlFor="image" className="cursor-pointer">
            <img className='h-85 border-3 rounded-t-lg' src={image instanceof File ? URL.createObjectURL(image) : image} alt="" />
          </label>
          <input className="border rounded-b-lg block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 file:cursor-pointer cursor-pointer "
            id='image' required onChange={(e) => setImage(e.target.files[0])} type="file" />
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <label htmlFor="farmer" className="w-full p-2   "><p className="" >Farmer Name: </p></label>
          <input type="text" id='farmer' value={farmer} required onChange={(e) => { setFarmer(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <hr className=" w-full border-gray-400" />
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <label htmlFor="name" className=" w-full p-2" ><p >Crop Name: </p></label>
          <input type="text" id='name' value={name} required onChange={(e) => { setName(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <hr className=" w-full border-gray-400" />
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <label htmlFor="type" className=" w-full p-2"><p >Crop Type: </p></label>
          <input type="text" id='type' value={type} onChange={(e) => { setType(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <hr className=" w-full border-gray-400" />
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <label htmlFor="price" className=" w-full p-2"><p >1{unit} Price: </p></label>
          <input type="text" id='price' required value={price} onChange={(e) => { setPrice(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <hr className=" w-full border-gray-400" />
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <label htmlFor="quantity" className=" w-full p-2"><p >Quantity: </p></label>
          <input type="text" id='quantity' value={quantity} required onChange={(e) => { setQuantity(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <hr className=" w-full border-gray-400" />
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <label htmlFor="status" className=" w-full p-2"><p >Status: </p></label>
          <select value={status} required id='status' onChange={(e) => setStatus(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 bg-gray-100 ">
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        <hr className=" w-full border-gray-400" />
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <label htmlFor="location" className=" w-full p-2"><p >Location: </p></label>
          <input type="text" id='location' value={location} required onChange={(e) => { setLocation(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <hr className=" w-full border-gray-400" />
        <button type='submit' className="border rounded-lg px-6 py-2  bg-gray-700 hover:bg-gray-950 text-white mb-3 cursor-pointer">Submit</button>
      </div>
      </form>
    </>
  )
}

export default AddCrop