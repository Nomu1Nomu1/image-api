import Image from "../models/imageModel.js";

export const image = async (req, res) => {
    try {
        const image = await Image.findAll({
            attributes: ["image", "name"],
        });

        const formattedImages = image.map(img => ({
            image: img.image,
            name: img.name
        }));

        const updateImages = formattedImages.map(item => ({
            ...item,
            image: `http://localhost:5000/images/${item.image}`
        }));
        res.status(200).json(updateImages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}