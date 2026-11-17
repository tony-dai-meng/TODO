import path from "node:path";

process.loadEnvFile(path.join(import.meta.dirname, ".env"));
const CONNECTION_URI_MONGO_DB = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
export { CONNECTION_URI_MONGO_DB, PORT };