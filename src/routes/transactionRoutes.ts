import express from 'express';
import * as transactionController from '../controllers/transactionController';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/transactions', auth, transactionController.index);
router.post('/transactions', auth, transactionController.transaction_post);

export default router;
