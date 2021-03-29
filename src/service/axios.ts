import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:3002/'
});

export async function GET<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  return await baseURL.get(path, config);
}

export function POST<T>(
  path: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  return baseURL.post(path, data, config);
}

export async function PUT<T>(
  path: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  try {
    return await baseURL.put(path, data, config);
  } catch (error) {
    return error;
  }
}

export async function DELETE<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  try {
    return await baseURL.delete(path, config);
  } catch (error) {
    return error;
  }
}
