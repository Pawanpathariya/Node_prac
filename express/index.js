const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1> this is get request </h1>");
})

app.get("/save",(req,res)=>{
    res.send("<h1> this is save get request </h1>");
})

app.post("/save",(req,res)=>{
    res.send("<h1> this is save post request </h1>");
})

app.listen(8080,()=>{
    console.log("server is running on port 8080");
    
})