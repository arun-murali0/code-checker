import passport, { DoneCallback } from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../../model/auth-model/user';
import { UserProp } from '../../utils/types/auth-types/userType';
import { comparePassword } from '../../middlewares/passwordHash';
import { CustomError } from '../../middlewares/ErrorHandler';

passport.serializeUser((user: Partial<UserProp>, done: DoneCallback) => {
	done(null, user._id);
});

passport.deserializeUser(async (id: string, done: DoneCallback) => {
	try {
		const findUser = await User.findById({ _id: id });
		if (!findUser) {
			throw new CustomError(400, 'User Not Found');
		}
		done(null, findUser);
	} catch (error) {
		done(error, null);
	}
});

export default passport.use(
	new Strategy(
		{ usernameField: 'email', passwordField: 'password' },
		async (email: string, password: string, done: any) => {
			try {
				const findUser: UserProp | null = await User.findOne({ email: email });
				if (!findUser) {
					throw new CustomError(400, 'user Not Found');
				}
				const match = comparePassword(password, findUser.password);
				if (!match) {
					throw new CustomError(400, 'password mismatch');
				}
				done(null, findUser);
			} catch (error) {
				done(error, null);
			}
		}
	)
);
