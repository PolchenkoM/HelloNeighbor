const { model, Schema } = require("mongoose");
const eventSchema = new Schema({
  title: String,

  description: String,

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  comments: Array,

  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],

  regDate : Date,

  eventTime: Date,

  eventStatus: Boolean,

  coordinates: {
    x: Number,
    y: Number
  }
  

});

const Event = model("Event", eventSchema);
module.exports = Event;
