import axios from 'axios';

const API_Base_URL = 'http://localhost:8000/api/v1';

const apiClient = axios.create({
    baseURL: API_Base_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors here (e.g., 401 Unauthorized, etc.)
        console.error("API Call Error:", error);
        return Promise.reject(error);
    }
);

export default apiClient;
