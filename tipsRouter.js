import express from 'express';
import { getAllTips } from '../controller/tipsController.js';

const router = express.Router();

// Route to get all tips
router.get('/tips', getAllTips);

export default router;
