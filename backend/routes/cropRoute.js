import express from 'express'
import { addCrop } from '../controller/cropControllers.js';
import upload from '../middleware/mutler.js';

const cropRouter=express.Router();

cropRouter.post('/add-crop',upload.single("image"),addCrop)

export default cropRouter