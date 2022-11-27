import express from 'express';
import * as purchaseController from '../controllers/purchaseController';
import { auth } from '../middlewares/auth';

const router = express.Router();

/**
 * @openapi
 * /purchases:
 *   get:
 *     tags:
 *       - purchases
 *     summary: Get all purchases
 *     description: Returns all purchases
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
router.get('/purchases', auth, purchaseController.index);

/**
 * @openapi
 * /purchases:
 *   post:
 *     tags:
 *       - purchases
 *     summary: Creates purchase
 *     description: Creates purchase
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: string
 *                 example: 3bd62dda-1fa4-44ed-964a-661ced5fd7f2
 *               buyerId:
 *                 type: string
 *                 example: af80a51c-afc7-4df5-a5b6-c8887dd25477
 *     responses:
 *       201:
 *         description: Successful operation
 *       409:
 *         description: User already exists
 */
router.post('/purchases', auth, purchaseController.purchase_post);

export default router;
