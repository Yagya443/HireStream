import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import {
    ArrowRight,
    Asterisk,
    Code2,
    Cross,
    Crown,
    Plus,
    Trophy,
    Users,
    X,
    Zap,
} from "lucide-react";
import HomeStatCard from "./HomeStatCard";
import HomeLiveSession from "./HomeLiveSession";
import HomePastSessions from "./HomePastSessions";

const Home = () => {
    const [sessionModel, setSessionModel] = useState(false);

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

                        <button
                            onClick={() => setSessionModel(true)}
                            className="bg-emerald-400 hover:bg-emerald-300 transition-colors text-black font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5"
                        >
                            <Zap className="w-4 h-4" fill="black" /> Create
                            Session <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="grid grid-cols-[400px_1fr] mt-16 gap-6 items-stretch">
                        <HomeStatCard />

                        <HomeLiveSession />
                    </div>

                    <HomePastSessions />
                </div>

                {sessionModel && (
                    <div className="bg-[#0d1512] border border-gray-800 text-white min-h-[40vh] min-w-[30vw] absolute p-4 top-1/2 left-1/2 rounded-xl -translate-1/2">
                        <div className="flex items-center justify-between ">
                            <p className="text-xl font-semibold">
                                Create New Session
                            </p>
                            <X
                                className="cursor-pointer"
                                onClick={() => setSessionModel(false)}
                            />
                        </div>
                        <div>
                            <p className="flex items-center ">
                                Select Problem
                                <Asterisk
                                    className="text-red-500 fill-red-500"
                                    size={10}
                                />
                            </p>
                            {/* <input  /> */}

                            <select className="border py-1 px-2 w-full rounded-full mt-2 text-white">
                                <option className="text-black" value="easy">Easy</option>
                                <option className="text-black" value="medium">Medium</option>
                                <option className="text-black" value="hard">Hard</option>
                            </select>
                        </div>

                        <div className="w-full bg-emerald-400 mt-4 flex items-center gap-4 rounded-xl px-4 py-2 border">
                            <Code2 />
                            <div>
                                <p className="font-semibold">Room Summary</p>
                                <h2 className="font-normal">
                                    Problem: Two Sum
                                </h2>
                                <h2 className="font-medium">
                                    Max Participants: 2 (1-on-1 session)
                                </h2>
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4 gap-4">
                            <button onClick={()=>setSessionModel(false)} className=" cursor-pointer border-2 border-gray-800 rounded-xl px-2 py-1">
                                Cancel
                            </button>
                            <button className="cursor-pointer rounded-2xl px-2 py-1 flex items-center font-semibold border-2 bg-emerald-400">
                                <Plus /> Create Room
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
