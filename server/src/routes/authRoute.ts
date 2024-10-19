import { Router } from 'express';
import { createNewUser } from '../controller/index';

const router = Router();

router.get('/create', createNewUser);

export default router;
