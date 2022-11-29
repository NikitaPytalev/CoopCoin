import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

/**
 * @openapi
 * /signup:
 *   post:
 *     tags:
 *       - auth
 *     summary: Register new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@gmail.com
 *               firstName:
 *                 type: string
 *                 example: Jon
 *               lastName:
 *                 type: string
 *                 example: Smith
 *               password:
 *                 type: string
 *                 example: secret_password
 *               role:
 *                 type: string
 *                 example: admin
 *               systemBalance:
 *                 type: number
 *                 example: 50
 *               giftBalance:
 *                 type: number
 *                 example: 0
 *     responses:
 *       201:
 *         description: Successful operation
 *       409:
 *         description: User already exists
 */
router.post('/signup', authController.signup_post);

/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - auth
 *     summary: Log in
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@coopcoin.com
 *               password:
 *                 type: string
 *                 example: secret_password
 *     responses:
 *      401:
 *         $ref: '#/components/responses/authenticationError'
 */
router.post('/login', authController.login_post);

export default router;
