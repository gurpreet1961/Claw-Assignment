import Resignation from "../models/Resignation.js";

export const viewResignations = async (req, res) => {
    const resignations = await Resignation.find();
    res.json({ data: resignations });
};

export const approveResignation = async (req, res) => {
    const { resignationId, approved, lwd } = req.body;
    await Resignation.findByIdAndUpdate(resignationId, { status: approved ? "approved" : "rejected", lwd });
    res.json({ message: "Resignation status updated" });
};
