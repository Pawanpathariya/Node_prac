const express=require('express');
const router=express.Router();
const stuController=require('../controllers/stuController')
const stModel=require("../models/stuModel")
router.post('/detail',stuController.detail)

module.exports=router