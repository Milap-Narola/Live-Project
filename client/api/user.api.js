import { getToken } from "../utils/cookies.js";
import { getBaseUrl } from "../api/config/api.config.js";
const baseURL = getBaseUrl();
const userApi = {
  signup: async (user) => {
    try {
      let req = await fetch(`${baseURL}/user/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let res = await req.json();
      Cookies.set("token", res.token, { expires: 1 / 24 });
      Cookies.set("isVerified", res.isVerified);
      console.log(res);
      window.location.href = "/";
    } catch (error) {
      console.log("Failed to sign up", error);
    }
  },
  login: async (user) => {
    try {
      let req = await fetch(`${baseURL}/user/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let res = await req.json();
      if (res.isActive) {
        Cookies.set("token", res.token, { expires: 1 / 24 });
        Cookies.set("isVerified", res.isVerified);
        window.location.href = "/";
      } else {
        alert("not activated");
      }
    } catch (error) {
      console.log("Failed to sign up", error);
    }
  },
  delete: async (id) => {
    await fetch(`${baseURL}/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  verifyadmin: async (id) => {
    try {
      let req = await fetch(`${baseURL}/user/verifyadmin/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      let res = await req.json();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default userApi;
