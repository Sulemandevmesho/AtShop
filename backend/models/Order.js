const mongoose = require("mongoose");
function dateFormat(date) {
  const month = date.getMonth();
  const day = date.getDate();
  const monthString = month >= 10 ? month : `0${month}`;
  const dayString = day >= 10 ? day : `0${day}`;
  return `${date.getFullYear()}-${monthString}-${dayString}`;
}

const orderScheman = new mongoose.Schema({
    customer_name:{
        type:String,
        required:true,
    },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      qty: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  status:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    default:dateFormat(new Date()),
  }
});
const Order=mongoose.model('order',orderScheman);
module.exports=Order;
