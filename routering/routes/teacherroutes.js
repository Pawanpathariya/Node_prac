const express=require('express')
teacherrouter=express();

teacherrouter.get('/teacherinfo',(req,res)=>{
    res.send("teacher info")
})
teacherrouter.post('/teacherdetail',(req,res)=>{
    res.send("teacher detail")
})

module.exports=teacherrouter