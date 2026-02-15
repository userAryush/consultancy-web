import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/apis/consultancy/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a response interceptor for global error handling
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        console.error('API Error Response:', {
            url: error.config?.url,
            status: error.response?.status,
            data: error.response?.data,
            message: message
        });
        return Promise.reject(error);
    }
);

export default apiClient;
