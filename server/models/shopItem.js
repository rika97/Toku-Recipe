import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    department: {
        type: String,
    },
    creator: {
        type: String,
    },
    priority: {
        type: String,
        required: true,
    }
});

const ShopItem = mongoose.model("Shop", shopSchema);

export default ShopItem;