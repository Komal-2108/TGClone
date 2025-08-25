const express = require("express");
const Booking = require("../models/booking");
const asyncHandler = require("../middleware/asyncHandler");

const router = express.Router();

//  Create Booking
router.post("/", asyncHandler(async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json({ success: true, data: booking });
}));


//  Get All Bookings
router.get("/", asyncHandler(async (req, res) => {
  const bookings = await Booking.find();
  res.json({ success: true, data: bookings });
}));

// Get Single Booking
router.get("/:id", asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });
  res.json({ success: true, data: booking });
}));

//  Update Booking
router.put("/:id", asyncHandler(async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: booking });
}));

//  Delete Booking
router.delete("/:id", asyncHandler(async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Booking deleted" });
}));

module.exports = router;
