import express from 'express';
import mongoose from 'mongoose';
import PostRecipe from '../models/postRecipe.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    const { page } = req.query;

    try{
        const LIMIT = 4;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await PostRecipe.countDocuments({});
        const posts = await PostRecipe.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, ingredients, category, cuisine, difficulty, userName } = req.query;
    try {
        const title = new RegExp(searchQuery, 'i');

        const posts = await PostRecipe.find({ $or: [{ title }, { ingredients: { $in: ingredients.split(',') } }, { category }, { cuisine }, { difficulty }, { userName }] });

        res.json({ data: posts });

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostRecipe.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPostRecipe = new PostRecipe({...post, creator: req.userId, createdAt: new Date().toISOString()});

    try {
        await newPostRecipe.save();
        res.status(201).json(newPostRecipe);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, userName, creator, selectedFile, ingredients, category, cuisine, preptime, cooktime, difficulty } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, description, userName, ingredients, category, cuisine, preptime, cooktime, difficulty, selectedFile, _id: id };

    await PostRecipe.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await PostRecipe.findByIdAndRemove(id);

    console.log("DELETE");

    res.json({ message: "Post deleted successfully"});
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) {
        return res.json({ message: "Unauthenticated" });
    };

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    const post = await PostRecipe.findById(id);

    const index = post.likes.findIndex((id) => id===String(req.userId));

    if(index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    };

    const updatedPost = await PostRecipe.findByIdAndUpdate(id, post, { new: true });

    res.status(200).json(updatedPost);
};

export default router;