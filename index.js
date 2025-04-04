// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const router = require("./routes/productRoutes");
// require("dotenv").config();

// const database = process.env.MONGO_DB;

// app.use(cors());

// const main = async () => {
//   mongoose.connect(database);
// };

// app.listen(2080, async (req, res) => {
//   try {
//     await main();
//     console.log("Connected to the database successfully");
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("Port: 2080");
// });

// app.use("/", router);

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./routes/productRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // just in case you're sending JSON body

let cachedDb = null;

const connectDB = async () => {
  if (cachedDb) return cachedDb;

  try {
    const db = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedDb = db;
    console.log("✅ Connected to DB");
    return db;
  } catch (err) {
    console.error("❌ DB connection error:", err);
    throw err;
  }
};

// Middleware to connect DB before routing
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).send("Database connection failed.");
  }
});

app.use("/", router);

// Export the app for Vercel (no app.listen)
module.exports = app;
