const stuModel=require('../models/stuModel')
const home=(req,res)=>{
res.send("This is student Home page")
}

const detail=(req,res)=>{
    res.send("This is student detail page")
}

const fees=(req,res)=>{
    res.send("This is student fees page")
}
module.exports={
home,
detail,
fees
}