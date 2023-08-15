import 'dotenv/config'
import express from "express";
import morgan from "morgan";
import setRoutes from "./config/routes.js";
import run from "./config/db.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(morgan("dev"))
run()
setRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})