import {
  Router
} from "express";
import blogRouter from "./blog.router";
const router = Router();


router.use("/blog", blogRouter);

export default router;