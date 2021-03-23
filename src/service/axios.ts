import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:3002/'
});

export async function GET<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  try {
    return await baseURL.get(path, config);
  } catch (error) {
    console.log(error);
  }
}

export async function POST<T>(
  path: string,
  data: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  try {
    return await baseURL.post(path, data, config);
  } catch (error) {
    console.log(error);
  }
}

export async function PUT<T>(
  path: string,
  data: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  try {
    return await baseURL.put(path, data, config);
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE<T>(
  path: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T> | undefined> {
  try {
    return await baseURL.delete(path, config);
  } catch (error) {
    console.log(error);
  }
}
