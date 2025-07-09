require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Important: setup CORS to allow frontend and send cookies
app.use(cors({
  origin: "http://localhost:5173",  // ✅ frontend origin
  credentials: true                // ✅ allow cookies to be sent
}));

// Database
const db = require("./models");

// Routes
const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");
const orderRoutes = require("./routes/order"); // make sure filename matches

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/orders", orderRoutes);

// Sync DB
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
  })
  .catch((err) => {
    console.error("❌ Failed to sync database:", err);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Ecostore backend is running!");
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
