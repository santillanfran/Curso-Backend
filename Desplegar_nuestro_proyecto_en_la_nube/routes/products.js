import { Router } from "express";
import {
  productsGet,
  productsPut,
  productsPost,
  productsDelete,
  productsPatch,
} from "../controllers/products.js";

const router = Router();

router.get("/", productsGet);

router.put("/", productsPut);

router.post("/", productsPost);

router.delete("/", productsDelete);

router.patch("/", productsPatch);

export default router;