const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: String,
  description: String,
  location: String,
  date: String,
  time: String,
  attendance: String,
});

module.exports.Event = mongoose.model("Event", eventSchema);
