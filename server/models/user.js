const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,

  password: String,

  profileId: String,


  email: {
    type: String,
    required: true,
    unique: true,
  },

  age: String,

  gender: String,

  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],

  aboutSelf: String,

  avatar: Array,

  rating: Number,

  regDate: Date,

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'Events'
  }]
});

const User = model("User", userSchema);
module.exports = User;

  avatar: {   //added Danil for avatar
    type: String, 
  }
});
const Users = model("Users", usersSchema);
module.exports = Users;
