import React, { useState } from "react";
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/user/signup",
                {
                    name:username,
                    email,
                    password,
                },
            );

            // console.log(response.data);
            // console.log("Succe");

            navigate("/home")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#0a0f0d] text-white font-sans flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-black" fill="black" />
                    </div>
                    <div className="leading-tight text-left">
                        <div className="font-mono font-bold text-lg tracking-tight">
                            TheBoard
                            <span className="text-emerald-400">Room</span>
                        </div>
                        <div className="text-[11px] text-gray-400 -mt-1">
                            Code Together
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-[#0d1512] border border-gray-800 rounded-2xl p-8">
                    <h1 className="text-2xl font-bold mb-1">
                        Create your account
                    </h1>
                    <p className="text-gray-400 text-sm mb-6">
                        Start coding and learning together, free.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-300 mb-1.5 block">
                                Full name
                            </label>
                            <div className="relative">
                                <User className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="w-full bg-[#0a0f0d] border border-gray-700 focus:border-emerald-400 outline-none rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-600 transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm text-gray-300 mb-1.5 block">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#0a0f0d] border border-gray-700 focus:border-emerald-400 outline-none rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-600 transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm text-gray-300 mb-1.5 block">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="At least 8 characters"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full bg-[#0a0f0d] border border-gray-700 focus:border-emerald-400 outline-none rounded-lg pl-10 pr-10 py-2.5 text-sm placeholder:text-gray-600 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleSignIn}
                            className="w-full bg-emerald-400 hover:bg-emerald-300 transition-colors text-black font-semibold px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 mt-2"
                        >
                            Create Account <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <h1 className="text-center text-sm text-gray-400 mt-4">
                        If you already have an account,{" "}
                        <button
                            onClick={() => navigate("/login")}
                            className="text-emerald-400  hover:text-emerald-300"
                        >
                            Login
                        </button>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
