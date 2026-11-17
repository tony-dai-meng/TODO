import mongoose from "mongoose";
import * as config from "./config/config.js";


try {
  await mongoose.connect(config.CONNECTION_URI_MONGO_DB, {"bufferCommands":false, "minPoolSize": 10});
  console.log("connection success!");
} catch (err) {
  console.dir(err);
  process.exit(1);
}

mongoose.connection.on("error", (err) => {
  console.dir(err);
});