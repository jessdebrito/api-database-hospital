import { Router } from "express";

export const accountRouter = Router();

accountRouter.post("", (req, res) => {
    return res.status(201).json({ message: "POST /accounts" })
})