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

const getProblemByName = async (req, res) => {
    try {
        const { name } = req.params;       
        const problem = await ProblemModel.findOne({ title: name });
        
        if (!problem) {
            return res.status(404).json({ message: "Problem not found" });
        }

        res.status(200).json({
            problem
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProblems,
    getProblemByName,
};
