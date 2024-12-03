const baseUrl = "http://localhost:8090";

const productApi = {
    create: async (data) => {
        try {
            let req = await fetch(`${baseURL()}/product/create`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            if (!req.ok) {
                throw new Error("Failed to create product");
            }
            let res = await req.json();
            return res;
        } catch (error) {
            console.error("Error during product creation:", error.message);
        }
    },
    getAllProducts:async()=>{
        try {
            let req = await fetch(`${baseURL()}/product/all`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!req.ok) {
                throw new Error("Failed to fetch products");
            }
            let res = await req.json();
            return res;
        } catch (error) {
            console.error("Error during fetching products:", error.message);
        }
    }
}