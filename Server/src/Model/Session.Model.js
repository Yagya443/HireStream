// models/Session.js
const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
    {
        problem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            required: true,
        },
        host: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                Max:2
            },
        ],
        language: {
            type: String,
            enum: ["javascript", "python", "java"],
            default: "javascript",
        },
        status: {
            type: String,
            enum: ["open", "in-progress", "completed"],
            default: "open",
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Session", sessionSchema);
