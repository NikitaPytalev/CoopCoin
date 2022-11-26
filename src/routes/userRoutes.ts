import express from 'express';
import * as userController from '../controllers/userController';
import { auth, isAdmin } from '../middlewares/auth';

const router = express.Router();

router.get('/users', [auth, isAdmin], userController.index);
router.get('/users/:id', auth, userController.user_get);
router.put('/users/:id/balance/:amount', [auth, isAdmin], userController.user_balance_put);

export default router;
