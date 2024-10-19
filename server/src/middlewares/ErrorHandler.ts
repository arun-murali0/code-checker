import { Response } from 'express';

export class CustomError extends Error {
	errorCode: number;
	errorMessage: string;
	constructor(errorCode: number, errorMessage: string) {
		super(errorMessage);
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}
}

export const errorHandler = (err: unknown, res: Response): void => {
	if (err instanceof CustomError) {
		res.status(err.errorCode).json({ error: { code: err.errorCode, message: err.errorMessage } });
	}
	res.status(500).json({ message: 'Internal server Error' });
};
