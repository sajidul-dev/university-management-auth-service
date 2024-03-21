import { Application } from 'express'
import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewires/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

// const express = require("express");
const app: Application = express()
app.use(cors())

//perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

// Testing
// app.get('/', async (req: Request, res: Response) => {
//   // res.send('Working successfully')
//   // throw new ApiError(400, 'New Error Occured')
//   Promise.reject(new Error('Unhandled Rejection'))
// })

app.use(globalErrorHandler)

export default app
