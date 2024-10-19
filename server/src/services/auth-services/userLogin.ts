import passport, { DoneCallback } from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../../model/auth-model/user';
import { UserProp } from '../../utils/types/auth-types/userType';

passport.serializeUser((user: Partial<UserProp>, done: DoneCallback) => {
	done(null, user._id);
});

passport.deserializeUser(async (id: string, done: DoneCallback) => {
	try {
		const findUser = await User.findById({ _id: id });
		if (!findUser) {
			throw new Error('user not found');
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
					throw new Error('user not found');
				}
				if (findUser.password !== password) {
					throw new Error('password mismatch');
				}
				done(null, findUser);
			} catch (error) {
				done(error, null);
			}
		}
	)
);
