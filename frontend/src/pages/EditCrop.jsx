import { useContext, useState } from "react";
import { Link, useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import Navbar from '../components/Navbar'
import '../index.css'

const EditCrop = () => {
    const { cropID } = useParams();
    const { crops, setCrops, unit, currency } = useContext(ShopContext);
    const crop = crops.find(item => item._id == cropID);
    const [name, setName] = useState(crop.name);
    const [type, setType] = useState(crop.type);
    const [farmer, setFarmer] = useState(crop.farmer);
    const [location, setLocation] = useState(crop.location);
    const [price, setPrice] = useState(crop.price);
    const [quantity, setQuantity] = useState(crop.quantity);
    const [status, setStatus] = useState(crop.status);
    const [image, setImage] = useState(crop.image);

    const updateHandler = () => {
        setCrops(crops.map((crop) => crop._id == cropID ? { ...crop, name, type, farmer, price, quantity, status, location,image } : crop))
    }
    return (
        <>
            <Navbar />
            <div className="w-4/5 sm:w-2/5 m-auto max-sm:text-sm flex flex-col justify-center items-center gap-2 mt-5 mb-15 border rounded-lg bg-gray-100">
                <div>
                    <label htmlFor="image" className="cursor-pointer">
                    <img className='h-85 border-3 rounded-t-lg' src={image instanceof File ? URL.createObjectURL(image) : image} alt="" />
                    </label>
                    <input className="border rounded-b-lg block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 file:cursor-pointer cursor-pointer "
                       id='image' onChange={(e) => setImage(e.target.files[0])} type="file" />
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <label htmlFor="farmer" className="w-full p-2   "><p className="" >Farmer Name: </p></label>
                    <input type="text" id='farmer' value={farmer} onChange={(e) => { setFarmer(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                </div>
                <hr className=" w-full border-gray-400" />
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <label htmlFor="name" className=" w-full p-2" ><p >Crop Name: </p></label>
                    <input type="text" id='name' value={name} onChange={(e) => { setName(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                </div>
                <hr className=" w-full border-gray-400" />
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <label htmlFor="type" className=" w-full p-2"><p >Crop Type: </p></label>
                    <input type="text" id='type' value={type} onChange={(e) => { setType(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                </div>
                <hr className=" w-full border-gray-400" />
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <label htmlFor="price" className=" w-full p-2"><p >1{unit} Price: </p></label>
                    <input type="text" id='price' value={currency + " " + price} onChange={(e) => { setPrice(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                </div>
                <hr className=" w-full border-gray-400" />
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <label htmlFor="quantity" className=" w-full p-2"><p >Quantity: </p></label>
                    <input type="text" id='quantity' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                </div>
                <hr className=" w-full border-gray-400" />
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <label htmlFor="status" className=" w-full p-2"><p >Status: </p></label>
                    <select value={status} id='status' onChange={(e) => setStatus(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 bg-gray-100 ">
                        <option value="Available">Available</option>
                        <option value="Sold">Sold</option>
                    </select>
                </div>
                <hr className=" w-full border-gray-400" />
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <label htmlFor="location" className=" w-full p-2"><p >Location: </p></label>
                    <input type="text" id='location' value={location} onChange={(e) => { setLocation(e.target.value) }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                </div>
                <hr className=" w-full border-gray-400" />
                <Link to={`/crop-details/${cropID}`}><button onClick={updateHandler} className="border rounded-lg px-6 py-2  bg-gray-700 hover:bg-gray-950 text-white mb-3 cursor-pointer">Submit</button></Link>
            </div>
        </>
    );
}

export default EditCrop