import axios, { AxiosInstance, AxiosPromise } from "axios";

export const baseURL = axios.create({
  baseURL: "http://localhost:3004",
});

export const GET = async (path: string, config?: any) => {
  try {
    return await baseURL.get(path, config);
  } catch (error) {
    return console.log(error);
  }
};

export const POST = async (path: string, data: any, config?: any) => {
  try {
    return await baseURL.post(path, data, config);
  } catch (error) {
    console.log(error);
  }
};

export const PUT = async (path: string, data: any, config?: any) => {
  try {
    return await baseURL.post(path, data, config);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (path: string, config?: any) => {
  try {
    return await baseURL.delete(path, config);
  } catch (error) {
    console.log(error);
  }
};
