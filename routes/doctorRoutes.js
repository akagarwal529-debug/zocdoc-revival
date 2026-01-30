const express = require("express");
const Doctor = require("../models/doctor");

const router = express.Router();

router.post("/add", async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.send(doctor);
});

router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.send(doctors);
});

module.exports = router;
