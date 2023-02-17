
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const request = require('supertest');
const { postProduct } = require('..');

chai.use(chaiHttp);
const url = 'http://localhost:4000';

describe("get all products: ", () => {
    it("should get all products", (done) => {
        chai
            .request(url)
            .get("/products")
            .end(function (err, res) {
                //console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe("Insert a product: ", () => {
    it("should insert a product", (done) => {
        chai
            .request(url)
            .post("/products")
            .send({
                title: "Remera New Man",
                description: "Remera color Negro con logo",
                code: "RECB8796",
                thumbnail: "http//:www.images.com/remeras.jpg",
                price: 12500,
                stock: 34
            })
            .end((err, res) => {
                //console.log(res.body);
                expect(res).to.have.status(201);
                done();
            });
    });
});
const responseId = postProduct

describe("update the product with id: ", () => {
    it("should update the stock", (done) => {
        request(url)
            .put("/products/631fd81b54c0d8f155d70697")
            .send({ stock: 56 })
            .expect(200, done)
    });
});

describe("delete the product with id: ", () => {
    it("should delete the product with id", (done) => {
        request(url)
            .delete("/products/632252880644a1963404be8c")
            .expect(200, done);
    });
});