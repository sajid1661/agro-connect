import { createContext, useEffect, useState } from "react";
import { Crops } from "../assets/assets";
import { useNavigate } from "react-router";
// Step1: Create a context
export const ShopContext=createContext(null);

// Step2: ShopContextProvider

const ShopContextProvider=(props)=>{

    const [crops,setCrops]=useState(Crops);
    const [currency,setCurrency]=useState("RS");
    const [unit,setUnit]=useState("KG");
    const [token,setToken]=useState("");


    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const navigate=useNavigate();

useEffect(()=>{
    
})

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
