const stuHome=(req,res)=>{
res.render('home')
}
const stuDetail=(req,res)=>{
res.render("detail")
}
const stuFees=(req,res)=>{
res.render("fees")
}

module.exports={
    stuHome,
    stuDetail,
    stuFees
}