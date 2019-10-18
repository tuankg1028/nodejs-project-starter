import mongoose from "mongoose";
import Utils from "../utils";

mongoose.connect("mongodb://localhost:27017/maplocation", {
  useNewUrlParser: true
});

mongoose.connection.on("error", err => {
  Utils.err(err);
});