import Resignation from "../models/Resignation.js";
import checkHoliday from "../config/calendarific.js";

export const submitResignation = async (req, res) => {
    const { lwd } = req.body;
    if (await checkHoliday(lwd, "US")) return res.status(400).json({ message: "LWD cannot be a holiday" });

    const resignation = await Resignation.create({ employeeId: req.user.userId, lwd, status: "pending" });
    res.json({ data: { resignation } });
};
