import React from "react";
import { ArrowRight, Code2, Crown, Trophy, Users, Zap } from "lucide-react";

const HomeStatCard = () => {
    return (
        <>
            <div className="flex flex-col gap-6 h-full">
                <div className="bg-[#0d1512] border border-gray-800 rounded-2xl p-5 relative">
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-9 h-9 rounded-lg bg-emerald-400/15 flex items-center justify-center">
                            <Users className="w-4.5 h-4.5 text-emerald-400" />
                        </div>
                        <span className="bg-emerald-400/15 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Live
                        </span>
                    </div>
                    <div className="text-3xl font-bold">7</div>
                    <div className="text-sm text-gray-500 mt-1">
                        Active Sessions
                    </div>
                </div>

                <div className="bg-[#0d1512] border border-gray-800 rounded-2xl p-5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-400/15 flex items-center justify-center mb-6">
                        <Trophy className="w-4.5 h-4.5 text-emerald-400" />
                    </div>
                    <div className="text-3xl font-bold">2</div>
                    <div className="text-sm text-gray-500 mt-1">
                        Total Sessions
                    </div>
                </div>

                <div className="bg-white rounded-2xl flex-1 text-black">
                    Chat bot
                </div>
            </div>
        </>
    );
};

export default HomeStatCard;
