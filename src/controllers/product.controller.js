import { Product  } from "../models/product.model";
import * as cart from '../services/product.service'

import HttpStatus from 'http-status-codes';


export const getProduct = async (req, res, next) => {
    try {
        
      const data = await cart.getProduct(req.body, res);
     
      if (data.length) {
        res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: data,
          message: ' Employee records found'
        });
      }
      else  {
        res.status(HttpStatus.NOT_FOUND).json({
          code: HttpStatus.NOT_FOUND,
          data: "",
          message: ' Employee details not found '
        });
      }
    } catch (error) {
      next(error);
    }
  
  };

  export const addProducts = async (req, res, next) => {
    try {
        
      const data = await cart.addProduct(req.body, res);
      if (data) {
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: ' Employee added successfully'
        });
      }
    } catch (error) {
      next(error);
    }
  };