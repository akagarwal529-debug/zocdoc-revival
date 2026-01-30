const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  slots: [String]
});

module.exports = mongoose.model("Doctor", doctorSchema);
