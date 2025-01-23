const express=require('express')
const router=express.Router();
const stuController=require('../controllers/stuController')
router.get('/home',stuController.home);
router.get('/insert',stuController.insert);
router.get('/display',stuController.display)
router.post('/save',stuController.save);
module.exports=router;