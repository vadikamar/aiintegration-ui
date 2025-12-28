import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const askChat = (prompt) => API.get(`/chat`, { params: { prompt } });

export const addMemory = (data) => API.post(`/memory`, null, { params: data });

export const ragQuery = (text) => API.get(`/query`, { params: { text } });
