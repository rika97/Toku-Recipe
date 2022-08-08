import mongoose from "mongoose";

const stockSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    department: {
        type: String,
    },
    expiry: {
        type: Date,
        required: false,
        default: new Date(),
    },
    creator: {
        type: String,
    },
});

const StockItem = mongoose.model("Stock", stockSchema);

export default StockItem;