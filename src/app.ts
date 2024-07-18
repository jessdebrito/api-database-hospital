import express from  "express";
import "express-async-errors";
import { accountRouter } from "./api/account";

export const app = express();

app.use(express.json());

app.use("/accounts", accountRouter)