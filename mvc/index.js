const express=require('express')
const app=express();
const mongoose=require('mongoose');
const stuRoutes=require('./routes/stuRoutes')
mongoose.connect('mongodb://127.0.0.1:27017/studatabase').then(()=>{
    console.log("database connected");
})
const bodyparser=require('body-parser')
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/student",stuRoutes)
app.listen(7000,()=>{
    console.log("server run at 7000 port ");
})