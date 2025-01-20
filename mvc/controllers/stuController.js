const stuHome=(req,res)=>{
res.send("This is home page ")
}
const stuDetail=(req,res)=>{
res.send("This is Detail page ")
}
const stuFees=(req,res)=>{
res.send("This is fees page ")
}
module.exports={
    stuHome,
    stuDetail,
    stuFees
}