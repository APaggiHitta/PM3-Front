import axios from "axios";

const API_BASE_URL = "https://pm3-production-4704.up.railway.app";

export const getActivities = async () => {
  const response = await axios.get(`${API_BASE_URL}/activities`);
  return response.data;
};
