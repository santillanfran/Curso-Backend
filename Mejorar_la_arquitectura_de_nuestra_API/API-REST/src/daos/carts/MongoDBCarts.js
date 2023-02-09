import MongoClass from "../../contenedores/MongoClass.js";
import { cartModel } from "../../models/CartModel.js";

export class MongoDBCarts extends MongoClass {
    constructor() {
        super("carts", cartModel);
    }

    async addProducts(cart, products) {
        products.forEach((product) => {
            // chequear si el producto ya esta en el carrito
            const productCart = cart.products.find(
                (prod) => prod._id == product._id
            );
            if (productCart) {
                productCart.amount++;
            } else {
                cart.products.push(product);
            }
        });
        const cartUpdated = await this.collection.findByIdAndUpdate(
            cart._id,
            { products: cart.products }
        );
        return cartUpdated;
    }

    async deleteProduct(cart, productId) {
        const productCart = cart.products.find(
            (prod) => prod._id == productId
        );
        if (productCart) {
            productCart.amount > 1
                ? productCart.amount--
                : (cart.products = cart.products.filter(
                    (prod) => prod._id != productId
                ));
        } else {
            throw new Error("El producto no esta en el carrito");
        }
        const cartUpdated = await this.collection.findByIdAndUpdate(
            cart._id,
            { products: cart.products }
        );
        return cartUpdated;
    }
}