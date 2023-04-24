// Description: Data Access Object for Product model sin hacerlo con una clase osea no vamos a reutilizar el mongo.dao.js
import {Product} from "../models/product.model.js";

const createProduct = async (data) => {
    try {
         const createdProduct = await Product.create(data);
         return createdProduct;
    } catch (error) {
        console.log(error)
    }
}



