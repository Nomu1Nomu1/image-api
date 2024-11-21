import e from "express";
import multer from "multer";
import { image } from "../controller/imagesController.js";
import { product, uploadImage } from "../controller/productController.js";

const upload = multer({
    dest: "images",
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error("Please upload an image"));
        }

        cb(undefined, true);
    },
})

const router = e.Router();

router.get("/images", image)
router.get("/products", product)
router.post('/upload', upload.single('image'), uploadImage);

export default router;