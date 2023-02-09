const axios = require('axios');

/** GET Products All **/
const getProduct = async () => {
    try {
        const response = await axios.get("http://localhost:4000/products");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

getProduct()

/**  POST New Products **/

const productNew = {
    title: "Pantalones de vestir",
    description: "Pantalones color azul",
    code: "PCA987",
    thumbnail: "https://www.images/pantalones.jpg",
    price: 54600,
    stock: 23
};
const postProduct = async (product) => {


    try {
        const response = await axios.post("http://localhost:4000/products", product);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    getProduct()
};

postProduct(productNew);


/** PUT Product Id **/

const putProduct = async () => {
    try {
        const response = await axios.put(
            "http://localhost:4000/products/62b79be4b4b6cc8f1bb6a540",
            {
                title: "Camisa New Man",
                price: 53890
            },
            {
                headers: {
                    "x-access-token": "token-value",
                },
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    getProduct()
}
putProduct()


/** DELETE  Product id **/

const deleteProduct = async () => {
    try {
        const response = await axios.delete(
            "http://localhost:4000/products/632252880644a1963404be8c",

            {
                headers: {
                    "x-access-token": "token-value",
                },
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    getProduct();
};
deleteProduct();

module.exports = { getProduct, postProduct, putProduct, deleteProduct }