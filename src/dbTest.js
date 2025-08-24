// src/dbTest.js
import "dotenv/config"; // ✅ load variables from .env
import { MongoClient } from "mongodb";

console.log("Loaded MONGODB_URI =", process.env.MONGODB_URI ? "✅ Found" : "❌ Missing");

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error("❌ MONGODB_URI is missing from .env");
    process.exit(1);
}

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Connected and pinged your deployment. Database credentials work.");
    } catch (err) {
        console.error("❌ Connection failed:", err);
    } finally {
        await client.close();
    }
}

run();