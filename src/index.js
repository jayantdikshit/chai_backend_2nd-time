// src/index.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import app from "./app.js"; // ✅ import default export

dotenv.config({
    path: "./env",
});

connectDB()
    .then(() => {
        const port = process.env.PORT || 8000;

        app.listen(port, () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log("❌ MongoDB connection failed !!!", err);
    });