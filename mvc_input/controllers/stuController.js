const stuModel=require('../models/stuModel')
const detail=async(req,res)=>{
    const {name,email,age}=req.body;
    const Data=await stuModel.create({
        name:name,
        email:email,
        age:age
    })
    
    res.send('student details')
    }
module.exports={
    detail
}