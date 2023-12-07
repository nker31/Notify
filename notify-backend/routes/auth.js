import express from 'express';
import { login, register,logout,verifyToken } from '../controller/auth_controller.js';

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post("/logout",logout)
router.get("/verifyToken",verifyToken)
export default router;