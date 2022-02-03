import Joi from '@hapi/joi';

export const registerValidator = (req, res, next) => {
  const validateRegister = Joi.object({
    fullname: Joi.string().min(2).required().trim(true),
    email: Joi.string().email().required().trim(true),
    password: Joi.string().min(2).max(10).required().trim(true),
    phone : Joi.string().length(10).pattern(/^[0-9]+$/).required()
  });
  const { error, value } = validateRegister.validate(req.body);
  
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}
