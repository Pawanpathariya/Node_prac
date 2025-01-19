const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("Teacher first get ")
})

router.get('/info',(req,res)=>{
    res.send("Teacher info page ")
})

router.get('/address',(req,res)=>{
    res.send("Teacher address page")
})

module.exports =router;