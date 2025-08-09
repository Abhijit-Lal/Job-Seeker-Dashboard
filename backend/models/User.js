const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  profileViews: Number,
  profileRating: Number,
  savedJobs: [String],
  appliedJobs: [String],
});

module.exports = mongoose.model("User", userSchema);
