import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(
    (config) => {
        // You can modify the request config here (e.g., add headers)
        console.log("Request Interceptor:", config);
        return config;
    },
    (error) => {
        // Handle request errors here
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // You can modify the response data here
        console.log("Response Interceptor:", response);
        return response;
    },
    (error) => {
        // Handle response errors here
        console.error("Response Error:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;