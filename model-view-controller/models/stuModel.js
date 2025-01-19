const mongoose=require('mongoose');
const stuSchema=new mongoose.Schema({
name:String,
Rollno:Number,
city:String
})

module.exports=mongoose.model("StudentDetail",stuSchema)