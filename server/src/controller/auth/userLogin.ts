import { TRYCATCH } from '../../middlewares/tryCatch';
import { Request, Response } from 'express-serve-static-core';

export const loginUser = TRYCATCH(async (req: Request, res: Response) => {
	console.log(req.body);

	res.status(200).json({ message: 'login successfull' });
});
