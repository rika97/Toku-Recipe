import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
import stockRoutes from './routes/stock.js';
import shopRoutes from './routes/shop.js'

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/recipebook', postRoutes);
app.use('/user', userRoutes);
app.use('/stockbook', stockRoutes);
app.use('/shoppinglist', shopRoutes);

app.get('/', (req, res) => {
    res.send("Hello to Toku API");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message));