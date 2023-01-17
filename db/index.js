import mongoose from "mongoose";
import { DB_URI } from "../utils/config.js";

mongoose.set("strictQuery", false);
var dbConn = mongoose.connection;
dbConn.on("connected", function () {
  console.log("Mongoose connected");
});

export const connectDB = () => {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  });
};

const disconnectDB = () => {
  mongoose.connection.close();
};
