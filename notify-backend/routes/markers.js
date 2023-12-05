import express from 'express';
import { getData , postData ,getDataById,deleteData} from '../controller/marker_controller.js';

const router = express.Router()

router.get('/', getData)
router.post('/', postData)
router.get('/:id', getDataById)
router.delete('/:id', deleteData)

export default router