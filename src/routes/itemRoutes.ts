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
router.post('/items', auth, itemController.item_post);

export default router;
