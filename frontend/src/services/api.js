import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const register = async (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);
export const login = async (userData) => axios.post(`${API_BASE_URL}/auth/login`, userData);
export const submitResignation = async (data, token) =>
    axios.post(`${API_BASE_URL}/employee/resign`, data, { headers: { Authorization: token } });
export const getResignations = async (token) =>
    axios.get(`${API_BASE_URL}/hr/resignations`, { headers: { Authorization: token } });
export const approveResignation = async (data, token) =>
    axios.put(`${API_BASE_URL}/hr/conclude_resignation`, data, { headers: { Authorization: token } });
export const submitExitInterview = async (data, token) =>
    axios.post(`${API_BASE_URL}/employee/exit_interview`, data, {
        headers: { Authorization: token },
    });
