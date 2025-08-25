const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

// Import Routes
const customerRoutes = require("./routes/customerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout/boilerplate");


// Static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // 
app.use(express.json());

// ➤ Routes (plural naming)
app.use("/api/customers", customerRoutes);   // Customers
app.use("/api/bookings", bookingRoutes);     // Bookings
app.use("/api/enquiries", enquiryRoutes);    // Enquiries
app.use("/api/auth", authRoutes);            // Authentication
app.get("/", (req, res) => res.render("pages/index"));
app.get("/about", (req, res) => res.render("pages/about"));
app.get("/contact", (req, res) => res.render("pages/contact"));
app.get("/bookings", (req, res) => res.render("pages/booking"));
app.get("/tour-packages", (req, res) => res.render("pages/tour-packages"));


// ➤ Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
