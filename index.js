const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./src/configs/database.config");
const StudentRoute = require("./src/routes/student.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/v1/students", StudentRoute);
