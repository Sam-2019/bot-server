require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {connectDB} = require("./db/index");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
connectDB()

const routes = require("./routes");
app.use("/", routes);

module.exports = app;
