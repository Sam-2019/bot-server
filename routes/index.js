const express = require("express");
const router = express.Router();
const { AUTH_KEY } = require("../utils/config");
const { switch_route } = require("../utils/switches");

//Get all Method
router.get("/musings/:id", async (req, res) => {
  const authorization = req.headers.authorization;

  if (authorization != AUTH_KEY) {
    return res.json({ message: "Konnichiwa" });
  }

  try {
    const data = await switch_route(req.params.id);
    if (!data) {
      return res.json({ message: "Konnichiwa" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
