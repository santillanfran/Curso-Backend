import { Router } from "express";
import {
    productGetAll,
    productGet,
    productPut,
    productPost,
    productDelete,
} from "../controllers/productControllers.js";

const router = Router();

router.get("/", productGetAll);

router.get("/:id", productGet);

router.put("/:id", productPut);

router.post("/", productPost);

router.delete("/:id", productDelete);

export default router;
