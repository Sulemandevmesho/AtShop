const express=require('express');
const router=express.Router();
const {getOrders,getOrder}=require("../controllers/orderController");


//@Get all orders
//@routes GET /api/orders
//@access public
router.get('/',getOrders);
//@Get a order 
//@routes GET /api/orders/id
//@access public
router.get('/:id',getOrder);
module.exports=router;