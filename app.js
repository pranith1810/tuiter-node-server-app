import express from "express";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/tuiter";

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000);
DB_CONNECTION_STRING=mongodb+srv://pranith_rao:operamini8688@cluster0.jzr7i2q.mongodb.net/?retryWrites=true&w=majority