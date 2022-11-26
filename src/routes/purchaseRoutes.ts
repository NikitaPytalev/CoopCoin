import express from 'express';
import * as purchaseController from '../controllers/purchaseController';
import { auth } from '../middlewares/auth';

const router = express.Router();

router.get('/purchase', auth, purchaseController.index);
router.post('/purchase', auth, purchaseController.purchase_post);

export default router;
