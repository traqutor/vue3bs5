import axios from 'axios';
import { getTokenData } from '@/services/jwt.service';

export const axiosWebApiInstance = axios.create({
  withCredentials: false,
});

// Request interceptor for API calls
axiosWebApiInstance.interceptors.request.use(
  async (config) => {
    const token = await getTokenData();
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
