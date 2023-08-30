import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import {
	genPassword,
	validPassword,
	issueJWT,
} from '../lib/utils.js';

//getUsers function to get all users
export const getUser = asyncHandler(async (req, res) => {
	const user = await User.find({});
	res.json(user);
});

//getUserById function to retrieve user by id
export const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	//if user id match param id send user else throw error
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: 'User not found' });
		res.status(404);
		throw new Error('User not found');
	}
});

const checkForUserName = (name) => {
	let user = User.findOne({ userName: name });
	if (user) {
		return false;
	} else {
		return true;
	}
};

export const registerUser = (req, res, next) => {
	let isUserNameUnique = checkForUserName(req.body.username);
	console.log(isUserNameUnique);

	if (!isUserNameUnique) {
		res.json({
			success: false,
			message: 'User name in use',
		});
	}

	// const saltHash = genPassword(req.body.password);

	// const salt = saltHash.salt;
	// const hash = saltHash.hash;

	// const newUser = new User({
	// 	userName: req.body.username,
	// 	email: req.body.useremail,
	// 	profileImg: req.body.userImgNumber,
	// 	hash: hash,
	// 	salt: salt,
	// 	isDarkTheme: false,
	// 	isMember: false,
	// 	isAdmin: false,
	// });

	// newUser
	// 	.save()
	// 	.then((user) => {
	// 		const jwt = issueJWT(user);

	// 		res.json({
	// 			success: true,
	// 			user: user,
	// 			token: jwt.token,
	// 			expiresIn: jwt.expires,
	// 		});
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 		next(error);
	// 	});
};

export const loginUser = (req, res, next) => {
	User.findOne({ email: req.body.useremail })
		.then((user) => {
			if (!user) {
				return res.status(401).json({
					success: false,
					msg: 'could not find user',
				});
			}
			const isValid = validPassword(
				req.body.password,
				user.hash,
				user.salt
			);
			if (isValid) {
				const tokenObject = issueJWT(user);
				const userData = {
					id: user._id,
					userName: user.userName,
					isDarkTheme: user.isDarkTheme,
					profileImg: user.profileImg,
					isMember: user.isMember,
				};
				if (user.isAdmin) {
					userData.isAdmin = user.isAdmin;
				}
				res.status(200).json({
					success: true,
					token: tokenObject.token,
					expiresIn: tokenObject.expires,
					user: userData,
				});
			} else {
				res.status(401).json({
					success: false,
					msg: 'you entered the wrong password',
				});
			}
		})
		.catch((err) => {
			next(err);
		});
};

export const authUser = (req, res, next) => {
	if (req.jwt) {
		User.findById(req.jwt.sub).then((user) => {
			if (user) {
				const userData = {
					id: user._id,
					userName: user.userName,
					isDarkTheme: user.isDarkTheme,
					profileImg: user.profileImg,
					isMember: user.isMember,
				};
				if (user.isAdmin) {
					userData.isAdmin = user.isAdmin;
				}
				res.status(200).json(userData);
			} else {
				res.status(404).json({ message: 'User not found' });
				res.status(404);
				throw new Error('User not found');
			}
		});
	}
};

export const updateUserTheme = async (req, res, next) => {
	const user = await User.findOneAndUpdate(
		{ _id: req.body.id },
		{ isDarkTheme: req.body.isDarkTheme }
	)
		.then(() => res.status(200).json({ message: 'Success' }))
		.catch(() => {
			res.status(404).json({ message: 'User not found' });
		});
};

export const updateUserImg = async (req, res, next) => {
	const user = await User.findOneAndUpdate(
		{ _id: req.body.id },
		{ profileImg: req.body.profileImg }
	)
		.then(() => res.status(200).json({ message: 'Success' }))
		.catch(() => {
			res.status(404).json({ message: 'User not found' });
		});
};
