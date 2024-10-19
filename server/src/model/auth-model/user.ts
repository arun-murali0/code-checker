import mongoose, { Schema } from 'mongoose';

import { UserProp } from '../../utils/types/auth-types/userType';

const userModel: Schema = new Schema<UserProp>({
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
});

export const User = mongoose.model<UserProp>('User', userModel);
