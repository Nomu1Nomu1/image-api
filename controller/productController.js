import Product from "../models/productModel.js";
import fs from "fs";

export const product = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const uploadImage = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const image = req.file;

    if (!image) {
        return res.status(400).json({ message: "Image is required" });
    }

    try {
        const imageData = fs.readFileSync(image.path);

        const newProduct = await Product.create({
            image: imageData,
            name: name,
            description: description,
            price: price,
            stock: stock,
        });

        fs.unlinkSync(image.path);

        res.status(201).json({
            message: "Product uploaded successfully!",
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
