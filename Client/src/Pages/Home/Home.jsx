import React from "react";
import NavBar from "../../Components/NavBar";
import { ArrowRight, Code2, Crown, Trophy, Users, Zap } from "lucide-react";
import HomeLeftPannel from "./HomeStatCard";
import HomeLiveSession from "./HomeLiveSession";
import HomePastSessions from "./HomePastSessions";

const Home = () => {
   

    return (
        <>
            <NavBar />
            <div>
                <div className="min-h-screen w-full bg-[#0a0f0d] text-white font-sans px-6 md:px-10 py-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-24">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shrink-0">
                                <Zap
                                    className="w-5 h-5 text-black"
                                    fill="black"
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-emerald-400">
                                    Welcome back, Burak!
                                </h1>
                                <p className="text-gray-400 text-sm mt-0.5">
                                    Ready to level up your coding skills?
                                </p>
                            </div>
                        </div>

                        <button className="bg-emerald-400 hover:bg-emerald-300 transition-colors text-black font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5">
                            <Zap className="w-4 h-4" fill="black" /> Create
                            Session <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="grid grid-cols-[400px_1fr] mt-16 gap-6 items-stretch">
                        {/* Left stat cards */}
                        <HomeLeftPannel />

                        {/* Right - live sessions */}
                        <HomeLiveSession />
                    </div>

                    <HomePastSessions />
                </div>

            </div>
        </>
    );
};

export default Home;
