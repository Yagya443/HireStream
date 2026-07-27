const express = require("express");
const { getAllProblems } = require("../Controllers/Problems.Controllers");
const authMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

// router.post("/create", authMiddleware, createProblem);
router.get("/getall", getAllProblems);

module.exports = router;