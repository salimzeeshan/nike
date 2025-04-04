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
app.use("/", router);

// MongoDB connection (run only once per cold start)
let isConnected = false;
const connectDB = async () => {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_DB);
      console.log("Connected to the database successfully");
      isConnected = true;
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }
};

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Export handler for Vercel
module.exports = app;
