import express from 'express';
import * as itemController from '../controllers/itemController';
import { auth } from '../middlewares/auth';

const router = express.Router();

/**
 * @openapi
 * /items:
 *   get:
 *     tags:
 *       - items
 *     summary: Get all items
 *     description: Returns all items
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
router.get('/items', auth, itemController.index);

/**
 * @openapi
 * /items/{id}:
 *   get:
 *     tags:
 *       - items
 *     summary: Find item by ID
 *     description: Returns a single item
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: id
 *       in: path
 *       description: ID of item to return
 *       required: true
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         $ref: '#/components/responses/authenticationError'
 *       403:
 *         $ref: '#/components/responses/authorizationError'
 *       404:
 *         description: Item not found
 */
router.get('/items/:id', auth, itemController.item_get);

/**
 * @openapi
 * /items:
 *   post:
 *     tags:
 *       - items
 *     summary: Creates item
 *     description: Creates item
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Chair
 *               description:
 *                 type: string
 *                 example: Comfortable and stable
 *               price:
 *                 type: number
 *                 example: 69.99
 *               image:
 *                 type: string
 *                 format: binary
 *               amount:
 *                 type: number
 *                 example: 10
 *     responses:
 *       201:
 *         description: Successful operation
 *       401:
 *         $ref: '#/components/responses/authenticationError'
 *       403:
 *         $ref: '#/components/responses/authorizationError'
 */
router.post('/items', auth, itemController.item_post);

export default router;
