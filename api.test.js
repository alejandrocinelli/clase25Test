// aca vamos hacer los test de la api pero para el cart 
import { expect } from "chai";
import supertest from "supertest";

let request 
let createProduct 
let getProducts 

describe("Test de la API", () => {
    before(() => {
        request = supertest("http://localhost:8080");
    });

    describe("-Post /login/listproducts", () => {
        
        const product = {
            "title": "Papa",
            "thumbnail": "PapaTest",
            "price": 100,}

            it("should response with 201 status code", async () => {
                const response = await request.post("/login/listproducts").send(product);
                createProduct = response.body;
                expect(response.status).to.equal(201);
            });

            it("Response should have title, price and thumbnail", async () => {
                expect(createProduct).to.keys("title", "price", "thumbnail", "_id", "__v");
            });
            
            it("Should return created product with the same title, thumbnail,price", async () => {
                expect(createProduct.title).to.equal(product.title);
                expect(createProduct.thumbnail).to.equal(product.thumbnail);
                expect(createProduct.price).to.equal(product.price);
            })
    });

    describe("-Get /login/listproducts", () => {
        it("should response with 200 status code", async () => {
            const response = await request.get("/login/listproducts");
            getProducts = response.body;
            expect(response.status).to.equal(200);
        });
        it("Response should have an array of products", async () => {
            expect(Array.isArray(getProducts)).to.equal(true);
            expect(getProducts.every((product) => product.title && product.price && product.thumbnail)).to.equal(true);
        });
    });
    
    describe(" -Get unknown route", () => {
        it("should response with 404 status code", async () => {
            const response = await request.get("/unknown");
            expect(response.status).to.equal(404);
        });
    })


});