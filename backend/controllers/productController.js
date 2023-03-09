const Product = require("../models/Product");
const mongoose=require('mongoose');
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    //console.log(products);
    res.json(products);
  } catch (error) {
    //console.error(error);
    res
      .status(500)
      .json({ msg: "there is problem or you not add any product in system" });
  }
};
const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Item don't exists" });
  }
};
const addProduct = async (req, res) => {
  try {
    let product = JSON.parse(JSON.stringify(req.body));
    product.image='/images/'+req.file.filename;
    //console.log(product);
    await Product.insertMany(product);
    res.json({ msg: "Product added to stock" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Item don't exists" });
  }
};

const putProduct = async (req, res) => {
  try {
    console.log('call');
    let product = JSON.parse(JSON.stringify(req.body));

    product.image='/images/'+req.file.filename;
    console.log(req.file);
    let e=await Product.findByIdAndUpdate({_id:product.id},product);
    console.log(e);
    res.json({ msg: "Product edited" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Item don't exists" });
  }
};
module.exports = {
  getProducts,
  getProductbyId,
  putProduct,
  addProduct,
};
