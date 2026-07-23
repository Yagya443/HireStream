require('dotenv').config()
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello");
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on server ${process.env.PORT}`);
});
