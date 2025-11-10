import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add the JWT token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Define a type for the climate data
export interface ClimateDataPoint {
  timestamp: string;
  temperature?: number;
  precipitation?: number;
  co2?: number;
}

// API Service Functions
export const getTemperatureData = (params: { startDate: string, endDate: string, location: string }): Promise<ClimateDataPoint[]> => {
  return apiClient.get('/climate/temperature', { params })
    .then(res => res.data);
};

export const loginUser = (credentials: { email: string, password: string }): Promise<{ token: string }> => {
  return apiClient.post('/auth/login', credentials)
    .then(res => res.data);
};

export default apiClient;