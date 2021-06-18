import express from 'express';
import * as controller from '../controllers/home.controller';

const router = express.Router();

router.get('/', controller.home);
router.get('/home', controller.home);
router.get('/about', controller.about);
router.get('/contact', controller.contact);

export default router;
