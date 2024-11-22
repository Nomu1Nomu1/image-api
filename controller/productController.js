import Product from "../models/productModel.js";

export const product = async (req, res) => {
    try {
        const products = await Product.findAll({
            attributes: ["image", "name", "description", "price", "stock"],
        });

        const formattedImagesProduct = products.map(product => ({
            image: product.image,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
        }));

        const updateImagesProduct = formattedImagesProduct.map(item => ({
            ...item,
            image: `http://localhost:5000/images/product/${item.image}`
        }));
        res.status(200).json(updateImagesProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

