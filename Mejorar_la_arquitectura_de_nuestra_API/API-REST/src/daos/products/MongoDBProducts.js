import MongoClass from "../../contenedores/MongoClass.js";
import { productSchema } from "../../models/ProductModel.js";

export class MongoDBProducts extends MongoClass {
    constructor() {
        super("products", productSchema);
    }
}