const express = require("express");
const { login, signup, getMe } = require("../Controllers/User.Controllers");

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.get("/getme", getMe);

module.exports = router;
