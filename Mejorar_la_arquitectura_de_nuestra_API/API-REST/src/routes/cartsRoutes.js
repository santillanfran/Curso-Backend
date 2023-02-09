import { Router } from "express";

import {
    cartGetAll,
    cartGet,
    cartPost,
    cartDelete,
    getCartProducts,
    addProductsCart
} from "../controllers/cartControllers.js";

const router = Router();

router.get("/", cartGetAll);

router.get("/:id", cartGet);

router.get("/:id/productos", getCartProducts);

router.post("/", cartPost);

router.post("/:id/products", addProductsCart);

router.delete("/:id/products/:productoId", cartDelete);

export default router;