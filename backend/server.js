import express from 'express'
import connectDB from './config/mongoDB.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import cors from 'cors'
import cropRouter from './routes/cropRoute.js';
import connectCloudinary from './config/cloudinary.js';

const app = express();
const port=process.env.PORT || 3000

// database connection 
connectDB();
// Cloudinary connection
connectCloudinary();

app.use(express.json());
// about cross origin Resource Sharing 
// You are telling your backend:
// "It's okay. Allow other origins to access my API."
// So now:
// Frontend (5173) → Backend (3000) allowed

app.use(cors());
//api endpoints
app.use('/api/user',userRouter)
app.use('/api/crop',cropRouter)
app.get('/',(req,res)=>{
  res.send("home page ");
})

app.listen(port, () => {
  console.log('Server is start on Port:'+port)
})

