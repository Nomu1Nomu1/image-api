import e from "express";
import { product } from "../controller/productController.js";
import { banner } from "../controller/bannerController.js";

const router = e.Router();

router.get("/products", product)
router.get('/banner', banner)

export default router;