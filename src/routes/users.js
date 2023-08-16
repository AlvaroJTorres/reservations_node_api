import { Router } from "express";
import * as usersController from "../controllers/users.js"

export const usersRouter = Router();

usersRouter.get("/", usersController.index);

usersRouter.post("/", usersController.create);

usersRouter.get("/:id", usersController.show);

usersRouter.patch("/:id", usersController.update);

usersRouter.delete("/:id", usersController.destroy);