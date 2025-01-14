const express=require('express')    
const studentrouter=express();

studentrouter.get('/stuinfo',(req,res)=>{
    res.send("strudent info")
})

studentrouter.post('/studetail',(req,res)=>{
    res.send("student detail")
})

module.exports=studentrouter