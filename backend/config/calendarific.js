import axios from "axios";

const checkHoliday = async (date, country) => {
    const API_KEY = process.env.CALENDARIFIC_API_KEY;
    if (!API_KEY) {
        console.error("Missing API key for Calendarific.");
        return false;
    }

    const url = `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${country}&year=${date.split('-')[0]}`;

    try {
        const { data } = await axios.get(url);
        if (!data?.response?.holidays?.length) {
            console.error("Unexpected API response:", data);
            return false;
        }
        return data.response.holidays.some(h => h.date.iso === date);
    } catch (error) {
        console.error("Error fetching holidays:", error.message);
        return false;
    }
};

export default checkHoliday;
