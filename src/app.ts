import { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewires/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
// import httpStatus from 'http-status';
// import httpStatus from 'http-status';

// const express = require("express");
const app: Application = express();
app.use(cors());

//perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);

app.use('/api/v1/', routes);

// Testing
// app.get('/', async (req: Request, res: Response) => {
//   // res.send('Working successfully')
//   // throw new ApiError(400, 'New Error Occured')
//   Promise.reject(new Error('Unhandled Rejection'))
// })
// Global error handler
app.use(globalErrorHandler);
// app.get('/test', (req: Request, res: Response) => {
//   res.send('Test route works');
// });
// handle not found route erro
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
