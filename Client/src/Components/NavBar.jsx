import { ArrowRight, BookOpenText, LayoutDashboard, Zap } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0a0f0d]/90 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 md:px-10 py-5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-black" fill="black" />
                </div>
                <div className="leading-tight">
                    <div className="font-mono font-bold text-lg tracking-tight text-white">
                        TheBoard<span className="text-emerald-400">Room</span>
                    </div>
                    <div className="text-[11px] text-gray-400 -mt-1">
                        Code Together
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <NavLink
                    to="/problem"
                    className={({ isActive }) =>
                        `cursor-pointer text-white font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5 ${
                            isActive ? "bg-emerald-400" : ""
                        }`
                    }
                >
                    <BookOpenText className="w-4 h-4" />
                    Problems
                </NavLink>
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `cursor-pointer text-white font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5 ${
                            isActive ? "bg-emerald-400" : ""
                        }`
                    }
                >
                    <BookOpenText className="w-4 h-4" />
                    DashBoard
                </NavLink>
                {/* <NavLink className="cursor-pointer  hover:bg-emerald-300 transition-colors text-black font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                </NavLink> */}
                <div className="bg-white h-8 w-8">{/* User Info */}</div>
            </div>
        </nav>
    );
};

export default NavBar;
