// models/Problem.js
const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            required: true,
        },
        dataStructure: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        examples: [
            {
                input: String,
                output: String,
                explanation: String,
            },
        ],
        starterCode: {
            javascript: String,
            python: String,
            java: String,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Problem", problemSchema);
