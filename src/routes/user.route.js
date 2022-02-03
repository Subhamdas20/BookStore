import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginValidator, registerValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { getProduct ,addProducts } from '../controllers/product.controller';
import * as cartController from '../controllers/cart.controller'
import * as wishlistController from '../controllers/wishlist.controller'

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
router.get('/get_cart_item',userAuth,cartController.getCartItem)

//route for wishlist
router.post('/add_wishlist_item',userAuth,wishlistController.addToWishList)
router.delete('/remove_wishlist_item',userAuth,wishlistController.removewishlistItem )
router.get('/get_wishlist_item',userAuth,wishlistController.getWishListItems)


export default router;
