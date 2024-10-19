import { TRYCATCH } from '../../middlewares/tryCatch';
import {  Response } from 'express-serve-static-core';

export const loginUser = TRYCATCH(async (req, res: Response) => {
	res.status(200).json({ message: 'login successfull' });
});
