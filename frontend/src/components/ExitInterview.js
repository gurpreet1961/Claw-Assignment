import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitExitInterview } from "../services/api";

export default function ExitInterview() {
    const [feedback, setFeedback] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const token = localStorage.getItem("token");
        try {
            await submitExitInterview({ feedback }, token);
            alert("Exit Interview Submitted!");
            navigate("/dashboard");
        } catch (err) {
            alert("Error submitting feedback.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-xl mb-4">Exit Interview Form</h1>
            <textarea
                placeholder="Share your feedback..."
                className="p-2 border w-full h-32"
                onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white mt-2">
                Submit
            </button>
        </div>
    );
}
