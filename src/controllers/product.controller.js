import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import passport from "passport";
import { Product } from '../models/product.model.js';

const nuevoProducto = async ({data}) => {
   console.log(data)
   try {
       const producto = await Product.create(data);
       return producto;
        
   } catch (error) {
         console.log(error)
   }

}
   /* console.log(data)
    const producto = new Product(data);
    const productoSalvado = await producto.save()
    return productoSalvado;
    //res.status(201).send(productoSalvado);
    //res.render('products', {productoSalvado});*/


const getProductos = async ({req, res}) => {
    
   
      // const { user } = req.session.passport;
   
   /* if(!user){
        return res.redirect("/login");
    }*/

   const productos = await Product.find().lean();
   //console.log(productos);
   return productos;
   // res.send(productos).status(200);
   /* res.render('listProducts', {productos});
   
*/
    
}

const getProductXId = async ({id}) => {
   const findProduct = await Product.findById(id);
   return findProduct;
}

const updateProduct = async ({id, data}) => {
   const product = await Product.findByIdAndUpdate( id , data);
   return product;
}

const deleteProduct = async ({id}) => {
   const product = await Product.findByIdAndDelete(id);
   return product;
}

export const productController = { nuevoProducto , getProductos ,
    getProductXId , updateProduct , deleteProduct}