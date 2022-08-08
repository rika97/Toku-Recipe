import express from 'express';
import mongoose from 'mongoose';
import ShopItem from '../models/shopItem.js';

const router = express.Router();


export const getShopsBySearch = async (req, res) => {
    const { searchQuery, creator } = req.query;
    try {
        const title = new RegExp(searchQuery, 'i');

        const shops = await ShopItem.find({ $or: [{ title }, { creator }] });

        res.json({ data: shops });

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createShop = async (req, res) => {
    const shop = req.body;

    const newShopItem = new ShopItem({...shop, creator: req.userId}); 

    try {
        await newShopItem.save();
        res.status(201).json(newShopItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteShop = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No shop with that id");

    await ShopItem.findByIdAndRemove(id);

    console.log("DELETE");

    res.json({ message: "Stock deleted successfully"});
};

export default router;