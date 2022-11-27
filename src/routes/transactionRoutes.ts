import express from 'express';
import * as transactionController from '../controllers/transactionController';
import { auth } from '../middlewares/auth';

const router = express.Router();

/**
 * @openapi
 * /transactions:
 *   get:
 *     tags:
 *       - transactions
 *     summary: Get all transactions
 *     description: Returns all transactions
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         $ref: '#/components/responses/authenticationError'
 *       403:
 *         $ref: '#/components/responses/authorizationError'
 */
router.get('/transactions', auth, transactionController.index);

/**
 * @openapi
 * /transactions:
 *   post:
 *     tags:
 *       - transactions
 *     summary: Creates transaction
 *     description: Creates transaction and updates balances
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 10
 *               reason:
 *                 type: string
 *                 example: Gift
 *               comment:
 *                 type: string
 *                 example: Happy Birthday!
 *               type:
 *                 type: number
 *                 example: 1
 *               role:
 *                 type: number
 *                 example: 0
 *               srcUserId:
 *                 type: string
 *                 example: 3bd62dda-1fa4-44ed-964a-661ced5fd7f2
 *               destUserId:
 *                 type: string
 *                 example: af80a51c-afc7-4df5-a5b6-c8887dd25477
 *     responses:
 *       201:
 *         description: Successful operation
 *       409:
 *         description: User already exists
 */
router.post('/transactions', auth, transactionController.transaction_post);

export default router;
