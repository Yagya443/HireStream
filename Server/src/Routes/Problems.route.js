const express = require("express");
const { getAllProblems, getProblemByName } = require("../Controllers/Problems.Controllers");
const authMiddleware = require("../Middleware/auth.middleware");

const router = express.Router();

// router.post("/create", authMiddleware, createProblem);
router.get("/getall",authMiddleware, getAllProblems);
router.get("/get/:name", authMiddleware, getProblemByName);

module.exports = router;