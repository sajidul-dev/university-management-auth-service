import { Application, Request, Response } from 'express'
import express from 'express'
import cors from 'cors'

// const express = require("express");
const app: Application = express()
app.use(cors())

//perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
