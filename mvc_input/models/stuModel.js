const mongoose=require('mongoose');

const stuSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

module.exports=mongoose.model('student',stuSchema)