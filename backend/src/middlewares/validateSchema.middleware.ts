import { NextFunction, Request, Response } from 'express';

import * as yup from 'yup';

const validateSchemaMiddleware =
  (schema: yup.AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.validatedBody = validatedBody;
      return next();
    } catch (error) {
      console.log(req.body);
      if (error instanceof yup.ValidationError) {
        const validationErrors: any = {};
        error.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        return res.status(400).json({
          message: validationErrors,
        });
      }
    }
  };

export default validateSchemaMiddleware;
