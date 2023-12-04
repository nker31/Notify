import express from 'express';
import { getData } from '../controller/emergency_c.js';

const router = express.Router()

router.get('/', getData)


export default router;