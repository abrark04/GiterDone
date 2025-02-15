
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors()); // Allow CORS for frontend requests

// ✅ Secure MongoDB Connection from .env
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ User Schema & Model
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  Fname: String,
  Lname: String,
  Password: { type: String, required: true },
  Cfname: String,
  Clname: String,
  Cemail: { type: String, required: true, unique: true }
});

const User = mongoose.model("User", userSchema);

// ✅ Middleware to Verify JWT Token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

// ✅ User Registration
app.post("/register", async (req, res) => {
  try {
    const { userId, Fname, Lname, Password, Cfname, Clname, Cemail } = req.body;

    // Check if userId or email already exists
    if (await User.findOne({ userId })) {
      return res.status(400).json({ message: "User ID already taken. Choose another." });
    }
    if (await User.findOne({ Cemail })) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Save User
    const newUser = new User({
      userId,
      Fname,
      Lname,
      Password: hashedPassword,
      Cfname,
      Clname,
      Cemail
    });

    await newUser.save();
    res.status(201).json({ message: "✅ User registered successfully", userId });
  } catch (error) {
    res.status(500).json({ message: "❌ Error registering user", error });
  }
});

// ✅ User Login
app.post("/login", async (req, res) => {
  try {
    const { userId, Password } = req.body;

    // Find User
    const user = await User.findOne({ userId });
    if (!user) return res.status(400).json({ message: "❌ User ID not found" });

    // Compare Password
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) return res.status(400).json({ message: "❌ Invalid credentials" });

    // Generate Token
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "✅ Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "❌ Error logging in", error });
  }
});

// ✅ Protected Route
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "✅ You have access to this protected route", user: req.user });
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

