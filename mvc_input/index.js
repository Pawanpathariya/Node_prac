const express=require('express');
const app=express();
const bodyParser = require('body-parser')
const mongoose=require('mongoose');
const port=7070;
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const stuRoute=require('./routes/stuRoutes');
mongoose.connect("mongodb://127.0.0.1:27017/mvc_input").then(()=>{
    console.log("database connected");
})
app.use('/student',stuRoute)
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});