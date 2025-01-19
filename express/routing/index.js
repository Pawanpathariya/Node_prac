const express=require('express')
const app=express();
const teacherroute=require('./routes/teacherroutes')
const studentroute=require('./routes/sturoutes')
app.use('/teacher',teacherroute);
app.use('/student',studentroute);

app.listen(8000);