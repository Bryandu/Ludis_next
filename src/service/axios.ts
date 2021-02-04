import axios, { AxiosRequestConfig } from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:3001/'
});

export const GET = async (path: string, config?: AxiosRequestConfig) => {
  try {
    return await baseURL.get(path, config);
  } catch (error) {
    return console.log(error);
  }
};

export const POST = async (
  path: string,
  data: unknown,
  config?: AxiosRequestConfig
): Promise<unknown> => {
  try {
    return await baseURL.post(path, data, config);
  } catch (error) {
    console.log(error);
  }
};

export const PUT = async (
  path: string,
  data: unknown,
  config?: AxiosRequestConfig
): Promise<unknown> => {
  try {
    return await baseURL.post(path, data, config);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (path: string, config?: AxiosRequestConfig): Promise<unknown> => {
  try {
    return await baseURL.delete(path, config);
  } catch (error) {
    console.log(error);
  }
};
