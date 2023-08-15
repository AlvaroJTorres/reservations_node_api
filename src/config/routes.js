import { usersRouter } from "../routes/users.js";

export default function setRoutes(app) {
  app.use("/api/v1/users", usersRouter)
}