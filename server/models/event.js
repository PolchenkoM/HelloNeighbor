const { model, Schema } = require("mongoose");
const eventSchema = new Schema({
  title: String,
  description: String,
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  author: String,
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
  eventTime: String,
  eventStatus: Boolean,
  coordinates: {
    x: Number,
    y: Number
  }
});

const Event = model("Event", eventSchema);
module.exports = Event;
