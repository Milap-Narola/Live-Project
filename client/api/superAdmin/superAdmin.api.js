import { getToken } from "../../utils/cookies.js";

import { getBaseUrl } from "./config/api.config.js";

const baseURL = getBaseUrl();
const superAdminApi = {
  getAdmins: async () => {
    try {
      let req = await fetch(`${baseURL}/user/all-admin`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      let res = await req.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default superAdminApi;
