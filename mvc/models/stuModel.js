const mongoose=require('mongoose');
const stuSchema=mongoose.Schema({
    name:String,
    rollno:Number
})

module.exports=mongoose.model("StudentDetail",stuSchema);