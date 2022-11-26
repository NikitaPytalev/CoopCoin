import express from 'express';
import * as userController from '../controllers/userController';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/users', auth, userController.index);
router.get('/users/:id', auth, userController.user_get);

export default router;
