import express from  "express";
import "express-async-errors";

export const app = express();
app.use(express.json());