import db from './server/config/db.js';
import userRoutes from './server/routes/userRoute.js';
import allRoutes from './server/routes/index.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//dotenv config
dotenv.config();

//connect database
db;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Creating API for user
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(
	PORT,
	console.log(
		`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
