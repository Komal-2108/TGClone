const express = require("express");
const Customer = require("../models/customer");
const asyncHandler = require("../middleware/asyncHandler");
const router = express.Router();

//  Create Customer
router.post("/", asyncHandler(async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).json({ success: true, data: customer });
}));

//  Get All Customers
router.get("/", asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.json({ success: true, data: customers });
}));

//  Get Single Customer
router.get("/:id", asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).json({ success: false, message: "Customer not found" });
  res.json({ success: true, data: customer });
}));

//  Update Customer
router.put("/:id", asyncHandler(async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: customer });
}));

//  Delete Customer
router.delete("/:id", asyncHandler(async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Customer deleted" });
}));

module.exports = router;
