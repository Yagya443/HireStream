import React from "react";
import { ArrowRight, Code2, Crown, Trophy, Users, Zap } from "lucide-react";

const HomeLiveSession = () => {
    const sessions = [
        {
            title: "Two Sum",
            difficulty: "Easy",
            author: "Burak Orkmez",
            participants: "1/2",
            status: "OPEN",
        },
        {
            title: "Valid Palindrome",
            difficulty: "Easy",
            author: "Burak Orkmez",
            participants: "2/2",
            status: "OPEN",
        },
        {
            title: "Maximum Subarray",
            difficulty: "Medium",
            author: "Burak Orkmez",
            participants: "2/2",
            status: "OPEN",
        },
        {
            title: "Valid Palindrome",
            difficulty: "Easy",
            author: "Burak Orkmez",
            participants: "2/2",
            status: "OPEN",
        },
    ];

    return (
        <>
            <div className="bg-[#0d1512] border border-gray-800 rounded-2xl p-5 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-emerald-400/15 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-emerald-400" />
                        </div>
                        <h2 className="font-bold text-lg">Live Sessions</h2>
                    </div>
                    <span className="text-sm text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        7 active
                    </span>
                </div>

                <div className="flex flex-col gap-3 max-h-[550px] scrollbar-none overflow-y-auto pr-1">
                    {sessions.map((s, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-[#0a0f0d] border border-gray-800 rounded-xl p-4 hover:border-emerald-400 hover:cursor-pointer transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="relative shrink-0">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-400 flex items-center justify-center">
                                        <Code2 className="w-5 h-5 text-black" />
                                    </div>
                                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0f0d]" />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-semibold text-sm">
                                            {s.title}
                                        </span>
                                        <span className={``}>
                                            {s.difficulty}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                        <span className="flex items-center gap-1">
                                            <Crown className="w-3 h-3" />{" "}
                                            {s.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-3 h-3" />{" "}
                                            {s.participants}
                                        </span>
                                        <span className="bg-emerald-400/15 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                            {s.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="bg-emerald-400 hover:bg-emerald-300 transition-colors text-black font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 shrink-0">
                                Rejoin <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeLiveSession;
