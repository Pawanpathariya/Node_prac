const stuModel=require('../models/stuModels')
const send=async(req,res)=>{
const {name,rollno,Address}=req.body;
await stuModel.create({
    name:name,
    rollno:rollno,
    Address:Address
})
res.send("Data saved successfully")
}

const get=async(req,res)=>{
    const data= await stuModel.find();
    res.send(data)
    }


module.exports={send,get}

