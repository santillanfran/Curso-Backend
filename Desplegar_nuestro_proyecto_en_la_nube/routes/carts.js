import { Router } from "express";
import {
  cartsGet,
  cartsPut,
  cartsPost,
  cartsDelete,
  cartsPatch,
} from "../controllers/carts.js";

const router = Router();

router.get("/", cartsGet);

router.put("/", cartsPut);

router.post("/", cartsPost);

router.delete("/", cartsDelete);

router.patch("/", cartsPatch);

export default router;