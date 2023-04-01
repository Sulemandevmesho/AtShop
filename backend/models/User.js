const moongoes = require("mongoose");

const UserSchema = new moongoes.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  
  address: {
    type: String,
    required: true,
  },
  dues: {
    type: Number,
  },
});
const User = moongoes.model("user", UserSchema);
module.exports = User;
