const starterCode = require("../starterCode/twoSum");

module.exports = {
    title: "Two Sum",
    difficulty: "Easy",
    dataStructure: ["Array", "Hash Table"],

    description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.",

    examples: [
        {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation:
                "nums[0] + nums[1] == 9, so return [0,1].",
        },
    ],

    starterCode,
};