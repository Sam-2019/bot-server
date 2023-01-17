import * as dotenv from "dotenv";
dotenv.config();
export const DB_URI = process.env.DB_URI;
export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT;
export const TOKEN = process.env.TELEGRAM_TOKEN;
export const AUTH_KEY = process.env.AUTH_KEY;