import express from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";
import { router as routes } from "./routes/index.js";

const app = express();
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/", routes);

export { app };
