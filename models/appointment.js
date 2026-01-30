const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctorId: String,
  slot: String,
  patientName: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);
