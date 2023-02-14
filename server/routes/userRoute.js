import {
	getUser,
	updateUserTheme,
	updateUserImg,
	registerUser,
	loginUser,
	authUser,
} from '../controllers/userController.js';
import { authMiddleware } from '../lib/utils.js';
import express from 'express';
const userRoute = express.Router();

// express router method to create route for getting all users
userRoute.get('/', getUser);

// express router method to create route for getting users by id
//userRoute.route('/:id').get(getUserById);

userRoute.post('/register', registerUser);

userRoute.post('/login', loginUser);

userRoute.get('/auth', authMiddleware, authUser);

userRoute.post('/theme', updateUserTheme);
userRoute.post('/profile-img', updateUserImg);

export default userRoute;
