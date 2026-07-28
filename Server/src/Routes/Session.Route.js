const express = require("express");
const {
    createSession,
    getSession,
} = require("../Controllers/Session.Controllers");
const authMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

router.post("/create", authMiddleware, createSession);
router.get("/get/:id", authMiddleware, getSession);

module.exports = router;
