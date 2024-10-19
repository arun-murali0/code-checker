import { TRYCATCH } from '../../middlewares/tryCatch';
import { Request, Response } from 'express-serve-static-core';
import { newUser } from '../../services/auth-services/createUserService';
import { UserProp } from '../../utils/types/auth-types/userType';
import { hashPassword } from '../../middlewares/passwordHash';

export const createNewUser = TRYCATCH(async (req: Request, res: Response) => {
	let data = req.body;
	data.password = hashPassword(data.password);
	const users: UserProp = await newUser(data);
	res.status(200).json({ message: 'created successful', users });
});
