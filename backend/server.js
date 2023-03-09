require("dotenv").config();
const express = require("express");
const connectDB =require( "./config/DB");

//import routes
const productRoutes=require("./routes/productRoutes")
const orderRoutes=require("./routes/orderRoutes")
const authRoutes=require("./routes/authRoutes")

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/auth',authRoutes)
const PORT = 5000;
app.listen(PORT, () => console.log(`server runnig at port ${PORT}`));
