const starterCode = require("../starterCode/reverseString");

module.exports = {
    title: "Reverse String",
    difficulty: "Easy",
    dataStructure: ["String", "Two Pointers"],
    description:
        "Write a function that reverses a string. The input is given as an array of characters s. Modify the array in-place with O(1) extra memory.",

    examples: [
        {
            input: 's = ["h","e","l","l","o"]',
            output: '["o","l","l","e","h"]',
            explanation: "Reverse the characters in-place.",
        },
        {
            input: 's = ["H","a","n","n","a","h"]',
            output: '["h","a","n","n","a","H"]',
            explanation: "Reverse the character array.",
        },
    ],
    starterCode,
};
