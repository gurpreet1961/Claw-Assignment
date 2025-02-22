import { useState } from "react";
import { submitResignation } from "../services/api";

export default function EmployeeDashboard() {
    const [lwd, setLwd] = useState("");

    const handleSubmit = async () => {
        const token = localStorage.getItem("token");
        try {
            await submitResignation({ lwd }, token);
            alert("Resignation Submitted!");
        } catch (err) {
            alert("Error submitting resignation.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-xl">Submit Resignation</h1>
            <input type="date" onChange={(e) => setLwd(e.target.value)} className="p-2 border" />
            <button onClick={handleSubmit} className="p-2 bg-red-500 text-white">Submit</button>
        </div>
    );
}
