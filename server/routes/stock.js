import express from 'express';

import { getStocksBySearch, createStock, deleteStock } from '../controllers/stocks.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getStocksBySearch);
router.post('/', auth, createStock);
router.delete('/:id', auth, deleteStock);

export default router;