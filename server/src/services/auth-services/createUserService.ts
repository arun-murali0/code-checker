import { User } from '../../model/auth-model/user';
import { UserProp } from '../../utils/types/auth-types/userType';

export const newUser = async (data: UserProp): Promise<UserProp> => {
	const user = await User.create(data);
	return user;
};
