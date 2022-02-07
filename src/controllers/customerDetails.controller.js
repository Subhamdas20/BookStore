import HttpStatus from 'http-status-codes';
import * as customer from '../services/customerDetails.service'

export const editCustomerDetails = async (req, res, next) => {
    try {
      const data = await customer.editCustomerDetails(req.body, res);
      if (data) {
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: 'Customer details added successfully'
        });
      }
    } catch (error) {
      next(error);
    }
  };