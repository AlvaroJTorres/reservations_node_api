import { Router } from "express";
import * as usersController from "../controllers/users.js"

export const usersRouter = Router();

usersRouter.get("/", usersController.index);

usersRouter.post("/", usersController.create);

usersRouter.get("/:id", usersController.show);