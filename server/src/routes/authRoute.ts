import { Router } from 'express';
import { createNewUser, loginUser } from '../controller/index';

import passport from '../services/auth-services/userLogin';

const router = Router();

router.get('/create', createNewUser);
router.get('/login', passport.authenticate('local'), loginUser);

export default router;
