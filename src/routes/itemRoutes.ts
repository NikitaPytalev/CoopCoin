import express from 'express';
import * as itemController from '../controllers/itemController';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/items', auth, itemController.index);
router.post('/items', auth, itemController.item_post);

export default router;
