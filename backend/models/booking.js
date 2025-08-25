const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  package: { type: String, required: true },
  date: { type: Date, required: true },
  persons: { type: Number, required: true, min: 1 },
});

module.exports = mongoose.model("Booking", bookingSchema);