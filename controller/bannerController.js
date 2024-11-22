import Banner from "../models/bannerModel.js";

export const banner = async (req, res) => {
    try {
        const banners = await Banner.findAll({
            attributes: ["image", "description"],
        });

        const formattedImagesBanner = banners.map(banner => ({
            image: banner.image,
            description: banner.description,
        }));

        const updateImagesBanner = formattedImagesBanner.map(item => ({
            ...item,
            image: `http://localhost:5000/images/banner/${item.image}`
        }));
        res.status(200).json(updateImagesBanner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}