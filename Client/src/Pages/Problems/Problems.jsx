import React from "react";
import NavBar from "../../Components/NavBar";
import { ArrowRight, ChevronRight, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EachProblem from "./EachProblem";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Problems = () => {
    const navigate = useNavigate();

    // const problems = [
    //     {
    //         title: "Two Sum",
    //         difficulty: "Easy",
    //         tags: "Array • Hash Table",
    //         description:
    //             "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
    //     },
    //     {
    //         title: "Reverse String",
    //         difficulty: "Easy",
    //         tags: "String • Two Pointers",
    //         description:
    //             "Write a function that reverses a string. The input string is given as an array of characters s.",
    //     },
    //     {
    //         title: "Valid Palindrome",
    //         difficulty: "Easy",
    //         tags: "String • Two Pointers",
    //         description:
    //             "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
    //     },
    //     {
    //         title: "Maximum Subarray",
    //         difficulty: "Medium",
    //         tags: "Array • Dynamic Programming",
    //         description:
    //             "Given an integer array nums, find the subarray with the largest sum, and return that sum.",
    //     },
    // ];

    const [problemData,setProblemData]=useState([])


    const handleProblems = async () => {
        try {
            const resposne = await axios.get(
                "http://localhost:3000/problems/getall",
            );
            console.log(resposne.data.problems);
            setProblemData(resposne.data.problems);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleProblems();
    }, []);

    return (
        <>
            <NavBar />
            <div className="min-h-screen w-full bg-[#0a0f0d] text-white font-sans px-6 md:px-10 pt-30 pb-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Practice Problems</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Sharpen your coding skills with these curated problems
                    </p>
                </div>

                {/* Problem list */}
                <div className="flex flex-col gap-4">
                    {problemData?.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => navigate(`/problem/${p.title}`)}
                            className="bg-[#0d1512] border border-gray-800 rounded-2xl p-5 flex items-center justify-between gap-6"
                        >
                            <div className="flex items-start gap-4 min-w-0">
                                <div className="w-10 h-10 rounded-lg bg-emerald-400 flex items-center justify-center shrink-0">
                                    <Code2 className="w-5 h-5 text-black" />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-semibold text-base">
                                            {p.title}
                                        </h3>
                                        <span
                                        // className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                                        // difficultyStyles[p.difficulty]
                                        // }`}
                                        >
                                            {p.difficulty}
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                        {p.tags}
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2 max-w-3xl">
                                        {p.description}
                                    </p>
                                </div>
                            </div>

                            <button className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-sm flex items-center gap-1 shrink-0">
                                Solve <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-4 mt-8">
                    <div className="bg-[#0d1512] border-gray-800 border py-6 px-12 rounded-2xl">
                        <div className="text-lg font-semibold">
                            Total Problems
                        </div>
                        <p className="text-5xl font-bold">5</p>
                    </div>
                    <div className="bg-[#0d1512] border-gray-800 border py-6 px-12 rounded-2xl">
                        <div className="text-lg font-semibold">Easy</div>
                        <p className="text-5xl font-bold">5</p>
                    </div>
                    <div className="bg-[#0a0f0d] border-gray-800 border py-6 px-12 rounded-2xl">
                        <div className="text-lg font-semibold">Medium</div>
                        <p className="text-5xl font-bold">5</p>
                    </div>
                    <div className="bg-[#0a0f0d] border-gray-800 border py-6 px-12 rounded-2xl">
                        <div className="text-lg font-semibold">Hard</div>
                        <p className="text-5xl font-bold">5</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Problems;
