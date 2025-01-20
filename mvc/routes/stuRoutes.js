const express=require('express')
const Route1=express.Router();
const stuCont=require('../controllers/stuController')
const stuModel=require('../models/stuModel')
Route1.get('/home',stuCont.stuHome);
Route1.get('/detail',stuCont.stuDetail);
Route1.get('/fees',stuCont.stuFees);
module.exports=Route1;