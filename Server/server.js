require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./src/libs/dbConnection");
const userRoutes = require("./src/Routes/User.Routes");
const problemsRoutes = require("./src/Routes/Problems.route");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);
app.use("/problems", problemsRoutes);

app.get("/", (req, res) => {
    return res.send("Hello");
});

connectDB();

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on server ${process.env.PORT}`);
});
