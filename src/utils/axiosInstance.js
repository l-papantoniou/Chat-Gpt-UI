import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', //  API base URL
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Handle token expiration (e.g., redirect to login, clear token)
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
