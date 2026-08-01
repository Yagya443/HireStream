const starterCode = require("../starterCode/maximumSubarray");

module.exports = {
    title: "Maximum Subarray",
    difficulty: "Medium",
    dataStructure: ["Array", "Dynamic Programming"],
    description:
        "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.",

    examples: [
        {
            input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
            output: "6",
            explanation: "The subarray [4,-1,2,1] has the largest sum = 6.",
        },
        {
            input: "nums = [1]",
            output: "1",
            explanation: "The only subarray is [1].",
        },
    ],
    starterCode,
};
