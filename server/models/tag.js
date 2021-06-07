const { model, Schema } = require("mongoose");

const tagSchema = new Schema({
  JS: "JS",
  Beer: "Пиво",
  Shisha: "Кальян",
  guitar: "Гитара",
  smoothies: "Смузи",
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
