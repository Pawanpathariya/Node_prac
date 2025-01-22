const mongoose=require('mongoose');

const stuSchema=new mongoose.Schema(
    {

        name:String,
        rollno:Number,
        class:String,
        Address:String
    }
)

module.exports=mongoose.model('sturecord',stuSchema);