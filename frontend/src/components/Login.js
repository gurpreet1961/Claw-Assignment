import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { data } = await login({ username, password });
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (err) {
            alert("Login failed!");
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="p-2 border" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="p-2 border" />
            <button onClick={handleLogin} className="p-2 bg-blue-500 text-white">Login</button>
        </div>
    );
}
