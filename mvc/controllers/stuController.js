const home=(req,res)=>{
res.send("home page")
}

const about=(req,res)=>{
    res.send("about page")
    }

const contact=(req,res)=>{
    res.send("contact page")    
    }

module.exports={home,about,contact}