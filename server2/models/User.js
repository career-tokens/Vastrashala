const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  title: String,
  body: [String],
  image: [String],
  lastCreatedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("User", UserSchema);