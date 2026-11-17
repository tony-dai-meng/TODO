import mongoose from "mongoose";
import * as config from "./config/config.js";
import express from "express";
import cors from "cors";

const app = express();
// Middleware
app.use(cors());
app.use(express.json({strict: false}));

// MongoDB Connection
try {
  await mongoose.connect(config.CONNECTION_URI_MONGO_DB, {bufferCommands:false, minPoolSize: 10});
  console.log("connection success!");
} catch (err) {
  console.dir(err);
  process.exit(1);
}

mongoose.connection.on("error", (err) => {
  console.dir(err);
});

// Start server
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});