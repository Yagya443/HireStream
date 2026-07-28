import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SessionRoom = () => {
    const { sessionId } = useParams();

    const [session, setSession] = useState(null);

    const getSession = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                `http://localhost:3000/session/get/${sessionId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            setSession(response.data.session);
            console.log(response.data.session);
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
    };

    useEffect(() => {
        getSession();
    }, []);

    if (!session) return <h1>Loading...</h1>;

    return (
        <div>
            {/* <h1>{session}</h1> */}

            {/* <p>Language: {session.language}</p> */}
        </div>
    );
};

export default SessionRoom;
