import React from "react";
import { Clock, Code2, Users } from "lucide-react";

const HomePastSessions = () => {
    const pastSessions = [
        {
            title: "Reverse String",
            difficulty: "easy",
            time: "about 13 hours ago",
            participants: 2,
        },
        {
            title: "Two Sum",
            difficulty: "easy",
            time: "2 days ago",
            participants: 2,
        },
    ];

    return (
        <div className="bg-[#120d0d] mt-8 border border-gray-800 rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-400/15 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <h2 className="font-bold text-lg text-gray-100">
                    Your Past Sessions
                </h2>
            </div>

            {/* Session cards */}
            <div className="flex  gap-4">
                {pastSessions.map((s, i) => (
                    <div
                        key={i}
                        className="bg-[#0a0505] min-w-[300px] border border-gray-800/80 rounded-xl p-4"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-400 flex items-center justify-center shrink-0">
                                <Code2 className="w-5 h-5 text-black" />
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-gray-100">
                                    {s.title}
                                </div>
                                <span className="inline-block bg-emerald-400/15 text-emerald-400 text-[11px] font-medium px-2 py-0.5 rounded-full mt-1">
                                    {s.difficulty}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3 h-3" /> {s.time}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Users className="w-3 h-3" /> {s.participants}{" "}
                                participants
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePastSessions;
