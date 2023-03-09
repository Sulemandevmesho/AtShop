//Order.find().populate({path:'items.product',select:["name","category","description","price"]});
const Order = require("../models/Order");
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.product").exec();

    res.json(orders);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "data not found or you not enter any data at that time" });
  }
};
const getOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.findOne({ id })
      .populate({
        path: "items.product",
        select: ["name", "category", "description", "price"],
      })
      .exec();
      res.json(order);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "data not found or you not enter any data at that time" });
  }
};
module.exports = { getOrders, getOrder };
