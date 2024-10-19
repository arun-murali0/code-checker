import { NextFunction, Request, Response } from 'express-serve-static-core';

export const TRYCATCH =
	(controller: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			await controller(req, res, next);
		} catch (error) {
			next(error);
		}
	};
