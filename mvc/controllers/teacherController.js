const teacherHome=(req,res)=>{
    res.send("This is home page ")
    }
    const teacherDetail=(req,res)=>{
    res.send("This is Detail page ")
    }
    const teacherSal=(req,res)=>{
    res.send("This is fees page ")
    }
    module.exports={
        teacherHome,
        teacherDetail,
        teacherSal
    }