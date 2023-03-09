const Product = require("../models/Product");
const Order =require("../models/Order");
const products=require("../data/products");
const orders=require("../data/orders");
const connectDB=require("../config/DB");

connectDB();
const importProducts=async()=>{
    try {
        
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("import products succedded");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

const importOrdes=async()=>{
    try {
        await Order.deleteMany({});
        await Order.insertMany(orders);
        console.log("import products succedded");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
//importProducts();
importOrdes();