import { useEffect, useState } from "react";
import { getResignations, approveResignation } from "../services/api";

export default function AdminDashboard() {
    const [resignations, setResignations] = useState([]);

    useEffect(() => {
        const fetchResignations = async () => {
            const token = localStorage.getItem("token");
            const { data } = await getResignations(token);
            setResignations(data.data);
        };
        fetchResignations();
    }, []);

    const handleApprove = async (id) => {
        const token = localStorage.getItem("token");
        await approveResignation({ resignationId: id, approved: true }, token);
        alert("Resignation Approved!");
    };

    return (
        <div className="p-6">
            <h1 className="text-xl">Resignations</h1>
            {resignations.map((resignation) => (
                <div key={resignation._id} className="p-2 border my-2 flex justify-between">
                    <span>{resignation.lwd}</span>
                    <button onClick={() => handleApprove(resignation._id)} className="p-2 bg-green-500 text-white">Approve</button>
                </div>
            ))}
        </div>
    );
}
