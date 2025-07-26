import cartModel from "../models/keranjangModel.js";

export const addCart = async (req, res) => {
    try {
        const { qty, productId, userId } = req.body;

        await cartModel.create({
            qty,
            productId,
            userId,
        });
        res.status(200).json({ msg: "Data berhasil dibuat!" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getCartAll = async (req, res) => {
    try {
        const response = await cartModel.findAll({
            attributes: ["productId", "qty", "userId", "createdAt"],
        });
        res.status(200).json({ response });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
