const stuModel=require('../models/stuModel')
const home=(req,res)=>{
    res.render('home')
}

const insert=(req,res)=>{
    res.render('insert')
}   

const display=async(req,res)=>{
    const data=await stuModel.find();
    res.render('display',{student:data})
  //  res.send(data);
}

const save=async(req,res)=>{
   const{name,city,age}=req.body;

const data=stuModel.create({
    name:name,
    city:city,
    age:age
})
res.render('insert')
}

module.exports={home,insert,display,save}