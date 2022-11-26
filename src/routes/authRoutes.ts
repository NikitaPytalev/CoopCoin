import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);

export default router;
