import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors for requests
api.interceptors.request.use(
  async (config) => {
    const userData = Cookies.get("token");

    if (userData) {
      if (userData) config.headers["Authorization"] = `Bearer ${userData}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptors for responses
api.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    const errorResponse = error.response;
    if (errorResponse.status === 401) {
      window.location.href = "/auth/sign-in";
      return Promise.reject(errorResponse);
    } else {
      throw error;
    }
  }
);

export default api;
