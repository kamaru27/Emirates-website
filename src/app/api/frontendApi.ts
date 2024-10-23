/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from "./config/asioxConfig";

export const frontendApi = {
  getHomePageData: async function () {
    return await axiosClient.get("home/");
  },
  getBannerCarousal: async function () {
    return await axiosClient.get("banner/");
  },
};
