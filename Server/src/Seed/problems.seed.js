const mongoose = require("mongoose");
const ProblemModel = require("../Model/Problem.Model");

const problems = [
   require("./problems/twoSum"),
    require("./problems/reverseString"),
    require("./problems/validPalindrome"),
    require("./problems/maximumSubarray"),
];

async function seedProblems() {
    try {
        await ProblemModel.deleteMany({});
        await ProblemModel.insertMany(problems);
    } catch (error) {
        console.error("Error seeding problems:", error);
    }
}

module.exports = seedProblems;
