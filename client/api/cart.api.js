import { getToken } from "../utils/cookies.js";
import { getBaseUrl } from "./config/api.config.js";

const baseURL = getBaseUrl();

const cartApi = {
    // Get cart contents
    get: async (userId) => {
        try {
            const response = await fetch(`${baseURL}/cart/${userId}`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch cart');
        }
    },

    // Add item to cart
    addItem: async (data) => {
        try {
            const response = await fetch(`${baseURL}/cart/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to add item to cart');
        }
    },

    // Update item quantity
    updateQuantity: async (userId, productId, quantity) => {
        try {
            const response = await fetch(`${baseURL}/cart/${userId}/update/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`
                },
                body: JSON.stringify({ quantity })
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to update cart item');
        }
    },

    // Remove item from cart
    removeItem: async (userId, productId) => {
        try {
            const response = await fetch(`${baseURL}/cart/${userId}/remove/${productId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to remove item from cart');
        }
    },

    // Clear entire cart
    clear: async (userId) => {
        try {
            const response = await fetch(`${baseURL}/cart/${userId}/clear`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            throw new Error('Failed to clear cart');
        }
    },

    // Get cart summary (total items, total amount)
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