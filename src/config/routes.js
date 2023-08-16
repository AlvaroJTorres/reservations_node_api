import { restaurantsRouter } from "../routes/restaurants.js";
import { usersRouter } from "../routes/users.js";

export default function setRoutes(app) {
  app.use("/api/v1/restaurants", restaurantsRouter)
  app.use("/api/v1/users", usersRouter)
}