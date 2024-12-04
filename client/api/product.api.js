import { getToken } from "../utils/cookies.js";
import { getBaseUrl } from "./config/api.config.js";

const baseURL = getBaseUrl();

const productApi = {
    get: async () => {
      try {
        let product = await fetch(`${baseURL}/products`);
        let res = await product.json();
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    post: async (data) => {
      try {
        let product = await fetch(`${baseURL}/products`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
          body: data,
        });
        let res = await product.json();
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    getById: async (id) => {
      try {
        let product = await fetch(`${baseURL}/products/${id}`);
        let res = await product.json();
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  
    patch: async (id, data) => {
      try {
        let product = await fetch(`${baseURL}/products/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify(data),
        });
        let res = await product.json();
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    delete: async (id) => {
      try {
        let product = await fetch(`${baseURL}/products/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        let res = await product.json();
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  export default productApi;