import * as cart from '../services/cart.service'
import HttpStatus from 'http-status-codes';

/**
 * Controller to add Product
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const addToCart = async (req, res, next) => {
    try {
      const data = await cart.addToCart(req.body, res);
      if (data) {
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: 'Product added successfully'
        });
      }
    } catch (error) {
        res.status(404).json(error)
      next(error);
    }
  };

/**
 * Controller to update Product quantity
* @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

 export const updateCart = async (req, res, next) => {
    try {
      const data = await cart.updateCart(req.body, res);
      if (data) {
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: 'Product updated successfully'
        });
      }
    } catch (error) {
        res.status(404).json(error)
      next(error);
    }
  };


  export const removeCartItem = async (req, res, next) => {
   try {
     const data = await cart.removeCartItems(req.body, res);
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