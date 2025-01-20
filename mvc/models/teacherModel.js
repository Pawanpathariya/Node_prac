const mongoose=require('mongoose');
const teachSchema=mongoose.Schema({
name:String,
contact:Number,
salary:Number
})
module.exports=mongoose.model("teacherDetail",teachSchema);