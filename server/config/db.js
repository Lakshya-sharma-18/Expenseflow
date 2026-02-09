require("dotenv").config();
const mongoose = require("mongoose");

const dns = require('dns');

async function connectDb() {
  const uri = process.env.MONGO_URI;
  console.log("Connecting to MongoDB URI:", uri ? uri.replace(/:([^:@]+)@/, ":****@") : "undefined");
  try {
    dns.setServers(['8.8.8.8', '8.8.4.4']); // Try using Google DNS
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

module.exports = connectDb;
