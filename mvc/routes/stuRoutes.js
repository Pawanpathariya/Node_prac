const express=require('express');
const router=express.Router();
const stuController=require('../controllers/stuController')
const stuModel=require('../models/stuModels')
router.post("/send",stuController.send)
router.get('/get',stuController.get)
module.exports=router;