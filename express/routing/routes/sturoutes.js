const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
res.send("Student first Page")
})
router.get('/info',(req,res)=>{
res.send("This is student info page")
})
router.get('/address',(req,res)=>{
res.send('This is student address page')
})
module.exports=router;