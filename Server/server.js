require('dotenv').config()
const express = require("express");
const mongoose=require('mongoose')
const connectDB = require('./src/libs/dbConnection');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello");
});

connectDB()

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on server ${process.env.PORT}`);
});
