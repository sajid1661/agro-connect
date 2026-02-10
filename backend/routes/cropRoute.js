import express from 'express'
import { addCrop,listCrops } from '../controller/cropControllers.js';
import upload from '../middleware/mutler.js';

const cropRouter=express.Router();

cropRouter.post('/add-crop',upload.single("image"),addCrop)
cropRouter.get('/list-crops',listCrops);

export default cropRouter