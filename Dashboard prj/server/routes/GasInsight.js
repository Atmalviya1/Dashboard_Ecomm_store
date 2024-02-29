// import { express } from "express";
import express from 'express';
const { Express } = express;

import {getGasInsight} from '../controllers/getGasInsight.js';

const router = express.Router();
router.get('/gasinsight', getGasInsight);

export default router;      