import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:3002/'
});

export async function GET<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  try {
    return await baseURL.get(path, config);
  } catch (error) {
    console.log(error);
  }
}

export const POST = async (
  path: string,
  data: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
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
): Promise<AxiosResponse> => {
  try {
    return await baseURL.post(path, data, config);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
  try {
    return await baseURL.delete(path, config);
  } catch (error) {
    console.log(error);
  }
};
