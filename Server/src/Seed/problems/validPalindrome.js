const starterCode = require("../starterCode/validPalindrome");

module.exports = {
    title: "Valid Palindrome",
    difficulty: "Easy",
    dataStructure: ["String", "Two Pointers"],
    description:
        "Given a string s, determine if it is a palindrome after converting uppercase letters to lowercase and removing all non-alphanumeric characters.",

    examples: [
        {
            input: 's = "A man, a plan, a canal: Panama"',
            output: "true",
            explanation:
                "After removing spaces and punctuation, the string becomes 'amanaplanacanalpanama'.",
        },
        {
            input: 's = "race a car"',
            output: "false",
            explanation:
                "The cleaned string is not the same forwards and backwards.",
        },
    ],
    starterCode,
};
