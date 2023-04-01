const express =require( "express");
const router=express.Router();
const {CreateUser,Login}=require("../controllers/userController")

router.post('/',CreateUser);
router.post('/login',Login);

module.exports=router;
