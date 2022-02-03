import HttpStatus from 'http-status-codes';
import * as wishlist from '../services/wishlist.service'


export const addToWishList = async (req, res, next) => {
    try {
      const data = await wishlist.addToWishList(req.body, res);
      if (data) {
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: 'Product added successfully'
        });
        
      }
      else{
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Product already present in wishList'
          });
      }
    } catch (error) {
     
      next(error);
    }
  };

  export const removewishlistItem = async (req, res, next) => {
    try {
      const data = await wishlist.removewishlistItems(req.body, res);
      if (data.deletedCount) {
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: data,
          message: 'Cart items Deleted'
        });
      }
      else if(!data.deletedCount){
        res.status(HttpStatus.NOT_FOUND).json({
          code: HttpStatus.NOT_FOUND,
          data: "",
          message: 'Cart items  not found '
        });
      }
    } catch (error) {
      next(error);
    }
  };

  export const getWishListItems = async (req, res, next) => {
    try {
      const data = await wishlist.getwishlistItems(req.body, res);
      if (data.length) {
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: data,
          message: 'wishlist items found'
        });
      }
      else  {
        res.status(HttpStatus.NOT_FOUND).json({
          code: HttpStatus.NOT_FOUND,
          data: "",
          message: 'wishlist empty'
        });
      }
    } catch (error) {
      next(error);
    }
  
  };