import { Router } from 'express';
import { createNewUser } from 'src/controller';

const router = Router();

router.get("/",createNewUser)


export default router