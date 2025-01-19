const express=require('express')
const route=express.Router();
const stuController=require('../controllers/stuController')
route.get('/home',stuController.home)
route.get('/detail',stuController.detail)
route.get('/fees',stuController.fees)
module.exports=route;