import cropModel from "../models/cropModel.js";
import {v2 as cloudinary} from 'cloudinary';



const addCrop=async(req,res)=>{
   try {
        const {name,type,farmer,location,price,quantity,status}=req.body;
        const image=req.file;

        const imageUrl=await cloudinary.uploader.upload(image.path,{resource_type:"image"});

        const cropData={
            name,
            type,
            farmer,
            location,
            price:Number(price),
            quantity: Number(quantity),
            status,
            image:imageUrl.secure_url,
            date: Date.now()
        }
        console.log(cropData);
        const newCrop=new cropModel(cropData);
            await newCrop.save();
            res.json({success:true,message:"Crop Added"});
    
   } catch (error) {
        console.log(error.message);
   }
}


export {addCrop} 