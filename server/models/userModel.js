import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		profileImg: {
			type: Number,
			required: true,
		},
		hash: {
			type: String,
			required: true,
		},
		salt: {
			type: String,
			required: true,
		},
		isDarkTheme: {
			type: Boolean,
			default: false,
		},
		isMember: {
			type: Boolean,
			required: true,
			defualt: false,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			defualt: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('auth_data_user', userSchema);

export default User;
