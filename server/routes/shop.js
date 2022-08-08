import express from 'express';

import { getShopsBySearch, createShop, deleteShop } from '../controllers/shops.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getShopsBySearch);
router.post('/', auth, createShop);
router.delete('/:id', auth, deleteShop);

export default router;