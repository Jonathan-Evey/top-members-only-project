import router from 'express';
import userRoute from './userRoute.js';

const allRoutes = router();

allRoutes.use('/users', userRoute);

export default allRoutes;
