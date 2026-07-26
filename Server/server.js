require('dotenv').config()
const express = require("express");
const mongoose=require('mongoose')
const connectDB = require('./src/libs/dbConnection');

const app = express();
// const userRoutes = require("./src/Routes/User.Routes.js");

app.use(express.json());


// app.use('/user',userRoutes)


app.get("/", (req, res) => {
    return res.send("Hello");
});

connectDB()

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on server ${process.env.PORT}`);
});
