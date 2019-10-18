import "./configs/env.config"; // set env variables
import "./configs/database.config";
import express from "express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import Utils from "./utils";
import routers from "./routers";
import responseEnhancer from "express-response-formatter";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(logger("dev"));
app.use(responseEnhancer());

// set routers
app.use("/api", routers);

app.use((err, req, res, next) => {
  Utils.Logman.error(err);
  // return ErrorUtil.ERR_400(res);
});


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  Utils.Logman.info("Server listening on " + PORT);
});