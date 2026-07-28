import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateSession = () => {
    const { problemId } = useParams();
    const navigate = useNavigate();

    const [language, setLanguage] = useState("javascript");

    const handleCreateSession = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:3000/session/create",
                {
                    problem: problemId,
                    language,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            const sessionId = response.data.session._id;

            navigate(`/session/${sessionId}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0f0d] text-white flex items-center justify-center">
            <div className="bg-[#0d1512] p-8 rounded-xl border border-gray-800">
                <h1 className="text-2xl font-bold mb-5">
                    Create Interview Session
                </h1>

                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-black border border-gray-700 px-4 py-2 rounded-lg"
                >
                    <option value="javascript">Javascript</option>

                    <option value="cpp">C++</option>

                    <option value="python">Python</option>
                </select>

                <button
                    onClick={handleCreateSession}
                    className="block mt-5 bg-emerald-400 text-black px-5 py-2 rounded-lg font-semibold"
                >
                    Create Session
                </button>
            </div>
        </div>
    );
};

export default CreateSession;
