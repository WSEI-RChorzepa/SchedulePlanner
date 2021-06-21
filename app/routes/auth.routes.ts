import express from 'express';
import SignInController from '../controllers/signin.controller';
import SignUpController from '../controllers/signup.controller';

const signInController = new SignInController();
const signUpController = new SignUpController();

const router = express.Router();

router.route('/signin').get(signInController.view).post(signInController.signin);

router.route('/signup').get(signUpController.view).post(signUpController.signup);

export default router;
