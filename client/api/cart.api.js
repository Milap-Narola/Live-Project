import { getToken } from "../utils/cookies.js";
import { getBaseUrl } from "./config/api.config.js";

const baseURL = getBaseUrl();

const cartApi = {
    getUserById: async () => {
        try {
            const response = await fetch(`${baseURL}/cart/`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            let res = await cart.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    },

    addItem: async (product) => {
        console.log(product);
        try {
            const cart = await fetch(`${baseURL}/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`
                },
                body: JSON.stringify(data)
            });
            let res = await cart.json();
            console.log("res", res)
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    deleteFromCart: async (productId) => {
        try {
            let cart = await fetch(`${baseURL}/cart/${productId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await cart.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    addQuantity: async (productId) => {
        try {
            const cart = await fetch(`${baseURL}/cart/add-qty/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`
                },
                body: JSON.stringify({ quantity })
            });
            let res = await cart.json();
            return res;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to update cart item');
        }
    },

    removeQuantity: async (productId) => {
        try {
            const cart = await fetch(`${baseURL}/cart/remove-qty${productId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            let res = await cart.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    },


    // clear: async (userId) => {
    //     try {
    //         const cart = await fetch(`${baseURL}/cart/${userId}/clear`, {
    //             method: "DELETE",
    //             headers: {
    //                 Authorization: `Bearer ${getToken()}`
    //             }
    //         });
    //         let res = await cart.json();
    //         return res;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },


    getSummary: async (userId) => {
        try {
            const response = await fetch(`${baseURL}/cart/${userId}/summary`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch cart summary');
        }
    }
};

export default cartApi;