const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const router = express.Router();


const ADMIN = { email: "admin@tirthghumo.com", password: "123456" };

//  Admin Login
router.post("/login", asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  if (email === ADMIN.email && password === ADMIN.password) {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
}));

module.exports = router;
