import mongoose from "mongoose";

const cropSchema=new mongoose.Schema({
    name:{type: String ,required: true},
    farmer:{type:String,required:true},
    location:{type:String,required:true},
    type:{type:String, default:"Other"},
    image:{type:String},
    quantity: {type:Number,required: true},
    price:{type:Number,required:true},
    status:{type:String,required:true},
    date:{type:String,default: new Date()}
})

const cropModel=mongoose.models.Crop || mongoose.model("Crop",cropSchema);

export default cropModel;