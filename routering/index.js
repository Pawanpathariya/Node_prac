const sturouter=require('./routes/sturoutes')
const teacherrouter=require('./routes/teacherroutes')
const express=require('express')
const app=express();
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/student',sturouter)
app.use('/teacher',teacherrouter)


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})