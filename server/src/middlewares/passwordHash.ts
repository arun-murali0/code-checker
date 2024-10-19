import bcrypt from 'bcrypt';

const saltRounds = 10;

// hashing a password
export const hashPassword = (password: string) => {
	const salt = bcrypt.genSaltSync(saltRounds);
	return bcrypt.hashSync(password, salt);
};

// compare password
export const comparePassword = (password: string, hashedPassword: string) => {
	return bcrypt.compareSync(password, hashedPassword);
};
