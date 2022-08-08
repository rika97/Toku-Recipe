import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    userName: String,
    creator: String,
    category: String,
    cuisine: String,
    preptime: Number,
    cooktime: Number,
    difficulty: String,
    ingredients: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const PostRecipe = mongoose.model("PostRecipe", postSchema);

export default PostRecipe;