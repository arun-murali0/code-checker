import mongoose from 'mongoose';
import { DB_STRING } from '../config';

export const DB = async (): Promise<void> => {
	try {
		await mongoose.connect(DB_STRING as string);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
