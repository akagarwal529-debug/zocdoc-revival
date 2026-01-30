const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let doctors = [];
let appointments = [];

app.post("/doctors/add", (req, res) => {
  const doctor = {
    id: Date.now().toString(),
    name: req.body.name,
    specialization: req.body.specialization,
    slots: req.body.slots
  };

  doctors.push(doctor);
  res.send(doctor);
});

app.get("/doctors", (req, res) => {
  res.send(doctors);
});

app.post("/appointments/book", (req, res) => {
  const exists = appointments.find(a =>
    a.doctorId === req.body.doctorId &&
    a.slot === req.body.slot
  );

  if (exists) {
    return res.send({ msg: "Slot already booked" });
  }

  appointments.push(req.body);
  res.send({ msg: "Booked successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 (no MongoDB)");
});
