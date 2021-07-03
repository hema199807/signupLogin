const express=require('express');
const Usercontroller=require('../Controller/User');

const router=express.Router();

router.post('/signup',Usercontroller.userSignUp);
router.post('/login',Usercontroller.userLogin);

module.exports=router;