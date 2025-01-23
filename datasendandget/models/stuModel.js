const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
  name:String,
  city:String,
  age:Number
})

module.exports=mongoose.model('pawanStu',studentSchema);