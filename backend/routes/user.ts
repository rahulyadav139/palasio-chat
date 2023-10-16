import express from 'express';
import userController from '../controller/user';
import { userAuthenticator } from '../middleware/auth';

const router = express.Router();

router.post('/signup', userController.insertUser);

router.post('/login', userController.loginUser);

router.get('/init', userAuthenticator, userController.userInit);

export default router;
