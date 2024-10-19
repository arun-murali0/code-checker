import { TRYCATCH } from '../../middlewares/tryCatch';
import { Request, Response } from 'express-serve-static-core';

import { newUser } from '../../services/auth-services/createUserService';
import { UserProp } from '../../utils/types/auth-types/userType';

export const createNewUser = TRYCATCH(async (req: Request, res: Response) => {
	const data = req.body;
	const users: UserProp = await newUser(data);
	res.status(200).json({ message: 'created successful', users });
});
