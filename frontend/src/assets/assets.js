import wheat from "./Crops Pic/wheat-crops.jpg";
import rice from "./Crops Pic/Mature_Rice.jpg";
import sunFlower from "./Crops Pic/Sunflower.jpg";
import cotton from "./Crops Pic/cotton.jpg";
import maize from "./Crops Pic/maize.jpg";
import sugarcane from "./Crops Pic/sugarcane.jpg";
import barley from "./Crops Pic/barley.jpg";
import millet from "./Crops Pic/millet.jpg";
import soybean from "./Crops Pic/soybean.jpg";
import mustard from "./Crops Pic/mustard.jpg";
import groundnut from "./Crops Pic/groundnut.jpg";
import tomato from "./Crops Pic/tomato.jpg";
import potato from "./Crops Pic/potato.jpg";
import upload_area from './Crops Pic/upload_area.png';

export const assets = {
  wheat,upload_area
};
export const Crops = [
  {
    _id: "c1",
    name: "Wheat",
    farmer: "Ali Khan",
    type: "Food Crop",
    image: wheat,
    quantity: 500,
    price: 120,
    location: "Multan",
    status: "Available",
  },
  {
    _id: "c2",
    name: "Rice",
    farmer: "Ali Khan",
    type: "Food Crop",
    image: rice,
    quantity: 300,
    price: 150,
    location: "Lahore",
    status: "Available",
  },
  {
    _id: "c3",
    name: "Cotton",
    farmer: "Usman Ali",
    type: "Cash Crop",
    image: cotton,
    quantity: 200,
    price: 220,
    location: "Bahawalpur",
    status: "Sold",
  },
  {
    _id: "c4",
    name: "Sunflower",
    farmer: "Adnan",
    type: "Oil Crop",
    image: sunFlower,
    quantity: 250,
    price: 300,
    location: "Behlani",
    status: "Available",
  },
  {
    _id: "c5",
    name: "Maize",
    farmer: "Sajid Ali",
    type: "Food Crop",
    image: maize,
    quantity: 400,
    price: 140,
    location: "Faisalabad",
    status: "Available",
  },
  {
    _id: "c6",
    name: "Sugarcane",
    farmer: "Bilal Ahmad",
    type: "Cash Crop",
    image: sugarcane,
    quantity: 600,
    price: 100,
    location: "Rahim Yar Khan",
    status: "Available",
  },
  {
    _id: "c7",
    name: "Barley",
    farmer: "Ahmed Raza",
    type: "Food Crop",
    image: barley,
    quantity: 350,
    price: 130,
    location: "Sahiwal",
    status: "Sold",
  },
  {
    _id: "c8",
    name: "Millet",
    farmer: "Hassan",
    type: "Food Crop",
    image: millet,
    quantity: 280,
    price: 160,
    location: "Dera Ghazi Khan",
    status: "Available",
  },
  {
    _id: "c9",
    name: "Soybean",
    farmer: "Imran Khan",
    type: "Oil Crop",
    image: soybean,
    quantity: 220,
    price: 310,
    location: "Okara",
    status: "Available",
  },
  {
    _id: "c10",
    name: "Mustard",
    farmer: "Zubair",
    type: "Oil Crop",
    image: mustard,
    quantity: 180,
    price: 270,
    location: "Jhang",
    status: "Sold",
  },
  {
    _id: "c11",
    name: "Groundnut",
    farmer: "Tariq Mehmood",
    type: "Oil Crop",
    image: groundnut,
    quantity: 260,
    price: 290,
    location: "Attock",
    status: "Available",
  },
  {
    _id: "c14",
    name: "Tomato",
    farmer: "Kamran",
    type: "Vegetable Crop",
    image: tomato,
    quantity: 150,
    price: 90,
    location: "Karachi",
    status: "Available",
  },
  {
    _id: "c15",
    name: "Potato",
    farmer: "Naveed",
    type: "Vegetable Crop",
    image: potato,
    quantity: 500,
    price: 80,
    location: "Gujranwala",
    status: "Available",
  },
];
