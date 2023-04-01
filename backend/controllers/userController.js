const mongoose = require("mongoose");
const User = require("../models/User");
const CreateUser = async (req, res) => {
  try {
    const newUser = JSON.parse(JSON.stringify(req.body));
    //var userId;
    await User.insertMany(newUser, (err, rec) => {
      res.json({ user: rec[0]._id, customerName: rec[0].name });
    });
    console.log("called");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "somthing went wrong " });
  }
};
const Login = async (req, res) => {
  try {
    const user = JSON.parse(JSON.stringify(req.body));
    const data = await User.findOne(user);
    if(data._id){
      res.json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "user not exists" });
  }
};
module.exports = { CreateUser, Login };
