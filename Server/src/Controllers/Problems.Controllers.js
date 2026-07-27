const mongoose = require("mongoose");
const ProblemModel = require("../Model/Problem.Model");

const getAllProblems = async (req, res) => {
    try {
        const problems = await ProblemModel.find();

        res.status(200).json({
            problems,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProblems,
};
