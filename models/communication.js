const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Communication = new Schema({
  logType: { type: String },
  date: { type: Date, default: Date.now },
  time: { type: String },
  from: { type: Schema.Types.ObjectId, ref: "Contacts" },
  subject: String,
  body: String,
  to:String,
  matter: { type: Schema.Types.ObjectId, ref: "Matters" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  addTime: { type: String },
});

module.exports = mongoose.model("Communication", Communication);
