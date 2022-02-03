import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginValidator, registerValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { getProduct ,addProducts } from '../controllers/product.controller';
import * as cartController from '../controllers/cart.controller'

const router = express.Router();

//route to get all users
router.post('/register',registerValidator,userController.registerUser);
router.post('/login', loginValidator,userController.loginUser);

//route for products
router.get('/product',getProduct)
router.post('/addproduct',userAuth,addProducts)

// route for cart
router.post('/add_cart_item',userAuth,cartController.addToCart)
router.put('/cart_item',userAuth,cartController.updateCart)
router.delete('/remove_cart_item',userAuth,cartController.removeCartItem)
export default router;
