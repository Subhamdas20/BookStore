import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginValidator, registerValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';


const router = express.Router();

//route to get all users
router.post('/register',registerValidator,userController.registerUser);
router.post('/login', loginValidator,userController.loginUser);



export default router;
