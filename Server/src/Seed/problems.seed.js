const mongoose = require("mongoose");
const ProblemModel = require("../Model/Problem.Model");

const problems = [
    {
        title: "Two Sum",
        difficulty: "Easy",
        dataStructure: ["Array","Hash Table"],
        description:
            "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
    },
    {
        title: "Reverse String",
        difficulty: "Easy",
        dataStructure: ["String","Two Pointers"],
        description:
            "Write a function that reverses a string. The input string is given as an array of characters s.",
    },
    {
        title: "Valid Palindrome",
        difficulty: "Easy",
        dataStructure: ["String","Two Pointers"],
        description:
            "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
    },
    {
        title: "Maximum Subarray",
        difficulty: "Medium",
        dataStructure: ["Array","Dynamic Programming"],
        description:
            "Given an integer array nums, find the subarray with the largest sum, and return that sum.",
    },
];

async function seedProblems() {
    try {
        await ProblemModel.deleteMany({});
        await ProblemModel.insertMany(problems);
    } catch (error) {
        console.error("Error seeding problems:", error);
    }
};


module.exports = seedProblems;