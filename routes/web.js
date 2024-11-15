import e from "express";
import { image } from "../controller/imagesController.js";

const router = e.Router();

router.get("/images", image)

export default router;