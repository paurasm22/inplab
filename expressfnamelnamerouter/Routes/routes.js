const express = require("express");
const router = express.Router();

// Route to get full name using URL parameters
router.get("/fullname/:first/:last", (req, res) => {
  const firstName = req.params.first || "First";
  const lastName = req.params.last || "Last";
  const fullName = `${firstName} ${lastName}`;
  res.send(`Full Name: ${fullName}`);
});

module.exports = router;
