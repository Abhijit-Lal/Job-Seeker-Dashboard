const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get user by email
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Create user
router.post("/create", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send("User created");
});

module.exports = router;
