import { Application } from "express";
import express from "express";

// const express = require("express");
const app: Application = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
