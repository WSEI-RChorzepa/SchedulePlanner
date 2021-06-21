import express from 'express';
import AuthController from '../controllers/auth.controller';

const authController = new AuthController();
const router = express.Router();

router.get('/', authController.index);
router.get('/signup', authController.signupPage);
router.post('/', authController.signIn);
router.post('/signup', authController.signup);

export default router;
