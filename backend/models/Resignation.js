import mongoose from "mongoose";

const ResignationSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    lwd: { type: Date, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
});

const Resignation = mongoose.model("Resignation", ResignationSchema);
export default Resignation;
