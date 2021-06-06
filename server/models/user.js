const { model, Schema } = require("mongoose");
const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {   //added Danil for avatar
    type: String, 
  }
});
const Users = model("Users", usersSchema);
module.exports = Users;
