import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://ludis-api.herokuapp.com/'
});

export async function GET<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | Error> {
  try {
    return await baseURL.get(path, config);
  } catch (error) {
    return error;
  }
}

export function POST<T>(
  path: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | Error> {
  try {
    return baseURL.post(path, data, config);
  } catch (error) {
    return error;
  }
}

export async function PUT<T>(
  path: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | Error> {
  try {
    return await baseURL.put(path, data, config);
  } catch (error) {
    return error;
  }
}

export async function DELETE<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | Error> {
  try {
    return await baseURL.delete(path, config);
  } catch (error) {
    return error;
  }
}
