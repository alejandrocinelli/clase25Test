import axios from "./axios.js";

let product = {
    "title": "Axios",
    "thumbnail": "Test",
    "price": 200,
}

const getProducts = async () => {
   
    try {
        const response = await axios.get("/login/listproducts");
        console.log("Server Response",response.data);
        return response.data;
    } catch (error) {
        console.log("Server Error",error);
    }

}

const createProduct = async (product) => {
    try {
        const response = await axios.post("/login/listproducts", product);
        console.log("Server Response",response.data);
        return response.data;
    } catch (error) {
        console.log("Server Error",error);
    }
}

const sendProduc = await createProduct(product);

const getProduc = await getProducts();

console.log("getProduc",getProduc);