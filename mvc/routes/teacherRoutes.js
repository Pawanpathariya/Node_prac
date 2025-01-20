const express=require('express')
const Route2=express.Router();
const teacherModel=require('../models/teacherModel')
const teacherCont=require('../controllers/teacherController')
Route2.get('/home',teacherCont.teacherHome);
Route2.get('/detail',teacherCont.teacherDetail);
Route2.get('/sal',teacherCont.teacherSal);
module.exports=Route2;