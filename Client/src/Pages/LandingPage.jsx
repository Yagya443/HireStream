import { Zap, Check, ArrowRight, Video, Code2, Globe2 } from "lucide-react";
import react from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="max-h-screen w-full bg-[#0a0f0d] text-white font-sans">
            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full bg-[#0a0f0d]/90 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 md:px-10 py-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-black" fill="black" />
                    </div>
                    <div className="leading-tight">
                        <div className="font-mono font-bold text-lg tracking-tight">
                            TheBoard<span className="text-emerald-400">Room</span>
                        </div>
                        <div className="text-[11px] text-gray-400 -mt-1">
                            Code Together
                        </div>
                    </div>
                </div>
                <button className="bg-emerald-400 hover:bg-emerald-300 transition-colors text-black font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5">
                    Get Started <ArrowRight className="w-4 h-4" />
                </button>
            </nav>

            {/* Hero */}
            <main className="mt-8 max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-16 grid md:grid-cols-2 gap-12 items-center">
                {/* Left column */}
                <div>
                    <span className="inline-flex items-center gap-1.5 bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                        <Zap className="w-3.5 h-3.5" /> Real-time Collaboration
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
                        <span className="text-emerald-400">Code Together,</span>
                        <br />
                        <span className="text-gray-100">Learn Together</span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
                        The ultimate platform for collaborative coding
                        interviews and pair programming. Connect face-to-face,
                        code in real-time, and ace your technical interviews.
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className=" inline-flex items-center gap-1.5 border border-gray-700 text-gray-200 text-sm px-3.5 py-1.5 rounded-full">
                            <Video className="w-3.5 h-3.5 text-emerald-400" />
                            Live Video Chat
                        </span>
                        <span className="inline-flex items-center gap-1.5 border border-gray-700 text-gray-200 text-sm px-3.5 py-1.5 rounded-full">
                            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                            Code Editor
                        </span>
                        <span className="inline-flex items-center gap-1.5 border border-gray-700 text-gray-200 text-sm px-3.5 py-1.5 rounded-full">
                            <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                            Multi-Language
                        </span>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        <button 
                            onClick={() => navigate("/signup")}
                            className=" cursor-pointer bg-emerald-400 hover:bg-emerald-300 transition-colors text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                            Start Coding Now <ArrowRight className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => navigate("/demo")}
                            className="cursor-pointer border border-gray-600 hover:border-gray-400 transition-colors text-gray-100 font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                            <Video className="w-4 h-4" /> Watch Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-10">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                                10k+
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 mt-1">
                                Active Users
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                                50k+
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 mt-1">
                                Sessions
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                                99.9%
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 mt-1">
                                Uptime
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LandingPage;