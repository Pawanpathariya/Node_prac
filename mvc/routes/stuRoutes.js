const express=require('express');
const router=express.Router();
const stuController=require('../controllers/stuController')
const stuModel=require('../models/stuModels')
router.get("/home",stuController.home)
router.get('/contact',stuController.contact)
router.get('/about',stuController.about)
module.exports=router;