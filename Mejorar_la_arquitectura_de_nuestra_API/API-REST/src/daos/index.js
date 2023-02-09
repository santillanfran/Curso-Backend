import dotenv from 'dotenv';
dotenv.config();
let productsDao
let cartsDao

switch (process.env.DB_NAME) {
    case 'mongoDB':
        import('./products/MongoDBProducts.js').then(({ MongoDBProducts }) => {
            productsDao = new MongoDBProducts();
        })
        import('./carts/MongoDBCarts.js').then(({ MongoDBCarts }) => {
            cartsDao = new MongoDBCarts();
        })
        break;

    default:
        throw new Error("No se ha definido una conexión a la base de datos");
        break;

}


export { productsDao, cartsDao }