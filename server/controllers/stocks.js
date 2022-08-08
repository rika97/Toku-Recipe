import express from 'express';
import mongoose from 'mongoose';
import StockItem from '../models/stockItem.js';

const router = express.Router();


export const getStocksBySearch = async (req, res) => {
    const { searchQuery, creator } = req.query;
    try {
        const title = new RegExp(searchQuery, 'i');

        const stocks = await StockItem.find({ $or: [{ title }, { creator }] });

        res.json({ data: stocks });

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createStock = async (req, res) => {
    const stock = req.body;

    const newStockItem = new StockItem({...stock, creator: req.userId}); 

    try {
        await newStockItem.save();
        res.status(201).json(newStockItem);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};

export const deleteStock = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No stock with that id");

    await StockItem.findByIdAndRemove(id);

    console.log("DELETE");

    res.json({ message: "Stock deleted successfully"});
};

export default router;