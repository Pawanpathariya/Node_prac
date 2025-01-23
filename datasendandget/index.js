const express=require('express')
const app=express()
const port=3000;
const bodyparser=require('body-parser')
const mongoose=require('mongoose')


// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect('mongodb://127.0.0.1:27017/pawanDB').then(()=>console.log('db is connected')).catch((err)=>console.log(err))
const routes=require('./routes/stuRoutes')
app.set('view engine','ejs')
app.use("/student",routes)
app.listen(port,()=>console.log(`server is running on port ${port}`))