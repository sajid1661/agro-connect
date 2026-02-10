import { createContext, useEffect, useState } from "react";
import { Crops } from "../assets/assets";
import { useNavigate } from "react-router";
import axios from 'axios'
// Step1: Create a context
export const ShopContext=createContext(null);

// Step2: ShopContextProvider

const ShopContextProvider=(props)=>{

    const [crops,setCrops]=useState([]);
    const [currency,setCurrency]=useState("RS");
    const [unit,setUnit]=useState("KG");
    const [token,setToken]=useState("");


    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const navigate=useNavigate();

const getCropData=async()=>{
      try {
        const response=await axios.get(backendUrl+'/api/crop/list-crops');
        if(response.data.success){
          setCrops(response.data.crops);
        }else{
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }

useEffect(()=>{
    getCropData();
},[crops])

// Define global values you want to share
const value={
        setCrops,
        crops,
        unit,
        currency,
        backendUrl,
        token,
        setToken,
        navigate
};

return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
);
}

// Step 4:
// use ShopContextProvider tag in main.jsx file Wraping the app.jsx. example  <ShopContextProvider> <App /> </ShopContextProvider> 

export default ShopContextProvider;
