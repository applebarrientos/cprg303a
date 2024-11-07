import axios from "axios";

const API_BASE_URL = "https://672d2f84fd8979715641a745.mockapi.io";
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("error in fetching data: ", error);
    throw error;
  }
};
