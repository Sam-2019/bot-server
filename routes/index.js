import express from "express";
import { AUTH_KEY } from "../utils/config.js";
import { switch_route } from "../utils/switches.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "Konnichiwa" });
});

router.get("/api", (req, res) => {
  res.json({ message: "Konnichiwa" });
});

//Get all Method
router.get("/api/:id", async (req, res) => {
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

export { router };
