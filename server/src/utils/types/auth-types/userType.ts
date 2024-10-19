// user sign up
export interface UserProp extends Document {
	_id?: string;
	name: string;
	email: string;
	password: string;
}
