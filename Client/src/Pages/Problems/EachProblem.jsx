import { ChevronDown, GripVertical, Play } from "lucide-react";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const EachProblem = () => {
    const { name } = useParams();
    const [draggable, setDraggable] = useState(false);
    const [leftWidth, setLeftWidth] = useState(50);

    const containerRef = useRef();

    const MIN_PERCENT = 25;
    const MAX_PERCENT = 75;

    const examples = [
        {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
            input: "nums = [3,2,4], target = 6",
            output: "[1,2]",
        },
        {
            input: "nums = [3,3], target = 6",
            output: "[0,1]",
        },
    ];

    const startDragging = useCallback(() => {
        setDraggable(true);
        document.body.style.cursor = "col-resize";
        // document.body.style.userSelect = "none";
    },[]);

    const stopDragging = useCallback(() => {
        setDraggable(false);
        document.body.style.cursor = "";
        // document.body.style.userSelect = "";
    },[]);

    const onDragging = useCallback(
        (e) => {
            if (!draggable) return;

            const rect = containerRef.current.getBoundingClientRect();
            const percent = ((e.clientX - rect.left) / rect.width) * 100;
            const clamped = Math.min(
                MAX_PERCENT,
                Math.max(MIN_PERCENT, percent),
            );
            setLeftWidth(clamped);
        },
        [draggable],
    );

    useEffect(() => {
        window.addEventListener("mousemove", onDragging);
        window.addEventListener("mouseup", stopDragging);

        return () => {
            window.removeEventListener("mousemove", onDragging);
            window.removeEventListener("mouseup", stopDragging);
        };
    }, [onDragging, stopDragging]);

    return (
        <div
            className="min-h-screen w-full bg-[#0a0f0d] text-white flex "
            ref={containerRef}
        >
            {/* Left panel - problem description */}
            <div
                className="p-6 md:p-8 overflow-y-auto max-h-screen scrollbar-none"
                style={{ width: `${leftWidth}%` }}
            >
                <div className="flex items-center justify-between mb-1">
                    <h1 className="text-2xl font-bold">Two Sum</h1>
                    <span className="bg-emerald-400/15 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
                        Easy
                    </span>
                </div>
                <p className="text-gray-500 text-sm mb-5">Array • Hash Table</p>

                {/* Problem selector dropdown */}
                <div className="relative mb-8">
                    <select className="w-full appearance-none bg-[#0d1512] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-200 outline-none focus:border-emerald-400 cursor-pointer">
                        <option>Two Sum - Easy</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Description */}
                <section className="mb-8">
                    <h2 className="font-bold text-lg mb-3">Description</h2>
                    <div className="text-sm text-gray-400 leading-relaxed space-y-3">
                        <p>
                            Given an array of integers nums and an integer
                            target, return indices of the two numbers in the
                            array such that they add up to target.
                        </p>
                        <p>
                            You may assume that each input would have exactly
                            one solution, and you may not use the same element
                            twice.
                        </p>
                        <p>You can return the answer in any order.</p>
                    </div>
                </section>

                {/* Examples */}
                <section>
                    <h2 className="font-bold text-lg mb-4">Examples</h2>
                    <div className="flex flex-col gap-4">
                        {examples.map((ex, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                                    <span className="text-gray-500">
                                        {i + 1}
                                    </span>
                                    Example {i + 1}
                                </div>
                                <div className="bg-[#0d1512] border border-gray-800 rounded-lg p-4 font-mono text-xs space-y-1.5">
                                    <div>
                                        <span className="text-emerald-400">
                                            Input:
                                        </span>{" "}
                                        <span className="text-gray-300">
                                            {ex.input}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-emerald-400">
                                            Output:
                                        </span>{" "}
                                        <span className="text-gray-300">
                                            {ex.output}
                                        </span>
                                    </div>
                                    {ex.explanation && (
                                        <div className="text-gray-500 pt-1">
                                            Explanation: {ex.explanation}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div
                onMouseDown={startDragging}
                className={`w-1 shrink-0 cursor-col-resize bg-gray-800 hover:bg-emerald-400/60 active:bg-emerald-400 transition-colors relative group`}
            ></div>

            {/* Right panel - code editor */}
            <div
                className="flex flex-col shrink-0 border-l border-gray-800"
                style={{ width: `${100 - leftWidth}%` }}
            >
                {/* Editor toolbar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                    <div className="w-6 h-6 rounded bg-yellow-400 flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-black">
                            JS
                        </span>
                    </div>

                    <div className="relative">
                        <button
                            // onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-1.5 bg-[#0d1512] border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-200"
                        >
                            {/* {language}{" "} */}
                            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                        </button>

                        {/* {langOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-[#0d1512] border border-gray-700 rounded-lg py-1 w-36 z-10 shadow-lg">
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => selectLanguage(lang)}
                                        className="w-full text-left px-3 py-1.5 text-sm text-gray-200 hover:bg-emerald-400/10 flex items-center gap-2"
                                    >
                                        {lang === language && (
                                            <span className="text-emerald-400 text-xs">
                                                ✓
                                            </span>
                                        )}
                                        <span
                                            className={
                                                lang === language ? "" : "ml-4"
                                            }
                                        >
                                            {lang}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )} */}
                    </div>

                    <button
                        // onClick={runCode}
                        className="ml-auto bg-emerald-400 hover:bg-emerald-300 transition-colors text-black font-semibold text-sm px-4 py-1.5 rounded-lg flex items-center gap-1.5"
                    >
                        <Play className="w-3.5 h-3.5" fill="black" /> Run Code
                    </button>
                </div>

                {/* Code area */}
                <div className="flex-1 overflow-auto bg-[#0a0f0d]">
                    <div className="flex font-mono text-sm min-h-full">
                        {/* Line numbers */}
                        <div className="text-gray-600 text-right px-3 py-3 select-none bg-[#0a0f0d] border-r border-gray-800">
                            {/* {codeLines.map((_, i) => (
                                <div key={i} className="leading-6">
                                    {i + 1}
                                </div>
                            ))} */}
                        </div>

                        {/* Editable code */}
                        <textarea
                            // value={code}
                            // onChange={(e) => setCode(e.target.value)}
                            spellCheck={false}
                            className="flex-1 bg-transparent text-gray-200 px-4 py-3 outline-none resize-none leading-6 whitespace-pre"
                            style={{ minHeight: "300px" }}
                        />
                    </div>
                </div>

                {/* Output panel */}
                <div className="border-t border-gray-800 p-4">
                    <h3 className="font-semibold text-sm mb-2">Output</h3>
                    <div className="bg-[#0d1512] border border-gray-800 rounded-lg p-3 text-sm text-gray-500 font-mono min-h-[60px]">
                        {'Click "Run Code" to see the output here...'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachProblem;
