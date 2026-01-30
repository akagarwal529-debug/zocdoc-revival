const express = require("express");
const Appointment = require("../models/appointment");

const router = express.Router();

router.post("/book", async (req, res) => {
  const exists = await Appointment.findOne({
    doctorId: req.body.doctorId,
    slot: req.body.slot
  });

  if (exists) {
    return res.send({ msg: "Slot already booked" });
  }

  const appointment = new Appointment(req.body);
  await appointment.save();
  res.send({ msg: "Booked successfully" });
});

module.exports = router;
