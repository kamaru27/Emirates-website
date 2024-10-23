/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from "./config/asioxConfig";

export const userApi = {
  createUser: async function (body: any) {
    return await axiosClient.post("user/", body);
  },
  userLogin: async function (body: any) {
    return await axiosClient.post("user/login", body);
  },
  userUpdate: async function (body: any) {
    return await axiosClient.post(`user/userUpdate`, body);
  },
};
