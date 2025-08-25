const express = require("express");
const Enquiry = require("../models/enquiry");
const asyncHandler = require("../middleware/asyncHandler");
const router = express.Router();


router.post("/", asyncHandler(async (req, res) => {
  const enquiry = new Enquiry(req.body);
  await enquiry.save();
  res.status(201).json({ success: true, data: enquiry });
}));


router.get("/", asyncHandler(async (req, res) => {
  const enquiries = await Enquiry.find();
  res.json({ success: true, data: enquiries });
}));

module.exports = router;
