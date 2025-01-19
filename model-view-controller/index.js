const express=require('express');
const app= express();
const stuRoute=require('./routes/stuRoute')
const mongoose=require('mongoose')
app.use('/student',stuRoute)
mongoose.connect("mongodb://127.0.0.1:27017/Studentsss").then(()=>{
    console.log("Connected with db");
})
app.listen(7000,()=>{
    console.log("Server run at 7000 port");
    
})