import express from 'express';
import { login, register,logout } from '../controller/auth_controller.js';

const router = express.Router()

router.get('/login/', login)
router.post('/register', register)
router.post("/logout",logout)


export default router;