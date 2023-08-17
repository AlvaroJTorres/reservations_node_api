import { Router } from "express";
import * as restaurantsController from "../controllers/restaurants.js"

export const restaurantsRouter = Router();

restaurantsRouter.get("/", restaurantsController.index);

restaurantsRouter.post("/", restaurantsController.create);

restaurantsRouter.get("/:id", restaurantsController.show);