const express=require('express')
const app=express();

const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Information").then(()=>{
    console.log("Data base connected");
})
const stuRoute=require('./routes/stuRoutes')
const teacherRoutes=require("./routes/teacherRoutes")
app.use("/student",stuRoute)
app.use('/teacher',teacherRoutes)
app.listen(7000,()=>{
    console.log("server run at 7000 port ");
})