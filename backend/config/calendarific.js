const axios = require("axios");

const checkHoliday = async (date, country) => {
    const API_KEY = process.env.CALENDARIFIC_API_KEY;
    const url = `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${country}&year=${date.split('-')[0]}`;

    try {
        const { data } = await axios.get(url);
        return data.response.holidays.some(h => h.date.iso === date);
    } catch (error) {
        console.error("Error fetching holidays:", error);
        return false;
    }
};

module.exports = checkHoliday;
