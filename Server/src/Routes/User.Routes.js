const express = require("express");
const { login, signup, getMe } = require("../Controllers/User.Controllers");
const authMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getme", authMiddleware, getMe);

module.exports = router;
