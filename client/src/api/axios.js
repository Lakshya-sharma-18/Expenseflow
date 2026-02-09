import axios from "axios";

// Helper to ensure base URL is correct
const getBaseUrl = () => {
  // FAST FIX: Fallback to the specific deployed backend if env var is missing
  let url = import.meta.env.VITE_API_URL || "https://expenseflow-server-jwvv.onrender.com/api/";

  // Remove trailing slash if present
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  // Ensure it ends with /api
  if (!url.endsWith('/api')) {
    url = `${url}/api`;
  }
  return url + '/';
};

const api = axios.create({
  baseURL: getBaseUrl(),
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
