import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const defaultOptions: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Accept: "application/json" },
  validateStatus(status: number) {
    return ["2", "3"].includes(status.toString().charAt(0)); // Accept only status codes 2xx && 3xx
  },
  timeout: 10000,
};

class APIService {
  private api = axios.create(defaultOptions);

  constructor() {
    this.api.interceptors.response.use(
      async (response: AxiosResponse) => {
        // TODO once access token is available handle it's expiration
        return response;
      },
      async (axiosError: AxiosError) => {
        throw axiosError;
      }
    );
  }

  public getAPI(): AxiosInstance {
    return this.api;
  }
}

export const APIClient = new APIService();
