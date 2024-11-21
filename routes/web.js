import e from "express";
import { image } from "../controller/imagesController.js";
import { product } from "../controller/productController.js";

const router = e.Router();

router.get("/images", image)
router.get("/products", product)

export default router;